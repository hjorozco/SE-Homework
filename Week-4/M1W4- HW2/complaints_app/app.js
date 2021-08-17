
// Add a "click" event listener that triggers the "processUserRequest" function, to the 5 input buttons. 
let inputButtons = document.getElementsByClassName("input button");
Array.from(inputButtons).forEach(element => element.addEventListener("click", processUserRequest));

/**
 * Sets the parameters used to fetch the data, and calls the "fetchData" async function with them.
 *  
 * @param {Event} event Contains information about the DOM event that triggered this function.
 */
function processUserRequest(event) {

    let inputText = document.getElementById("inputText");
    let numOfcomplaintsText = inputText.value.trim();
    let numOfComplaints = Number(numOfcomplaintsText);

    if (isNaN(numOfComplaints) || !Number.isInteger(numOfComplaints)
        || numOfComplaints < 0 || numOfComplaints > 100) {
        alert("Please enter an integer number between 0 and 100.");
        inputText.focus();
    } else {
        if (numOfcomplaintsText === "") numOfComplaints = 10;

        let borough = event.target.innerHTML;
        if (borough === "STATEN ISLAND") borough = "STATEN%20ISLAND";

        document.getElementById("outputContainer").innerHTML = "";

        fetchData(numOfComplaints, borough).then(displayData);
    }
}


/**
 * Fetchs the data from the NYC Open Data API endpoint
 * 
 * @param {Number} limit The number of complaints that will be fetched
 * @param {String} borough The name of the borough from which the complaints will be fetched
 * @returns A promise. The promise result is a JSON object containing the complaints fetched, or 
 * null if no data was fetched.  
 */
const fetchData = async (limit, borough) => {
    const alertErrorMessage = "No data can be retrived from the NYC Open Data API.";
    const nycOpenDataApiEndpoint = "https://data.cityofnewyork.us/resource/erm2-nwe9.json";
    const queryParameters =
        `?$select=descriptor,resolution_description&$limit=${limit}&agency=NYPD&borough=${borough}`;
    const apiRequestUrl = nycOpenDataApiEndpoint + queryParameters;
    console.log("URL used to fetch data from the NYC Open Data API:\n" + apiRequestUrl);

    try {
        const response = await fetch(apiRequestUrl);
        if (response.ok) {
            try {
                const data = await response.json();
                return data;
            } catch (error) {
                alert(alertErrorMessage);
                return null;
            }
        } else {
            throw new Error(`${response.status} (${response.statusText})`);
        }
    } catch (error) {
        alert(alertErrorMessage);
        return null;
    }
}

/**
 * Displays each of the complaints "descriptors" in the web page (in ascending order) as a siren icon, 
 * a text and a button, and attaches an event listener to each of those buttons to display the corresponding 
 * "resolution_description" when clicked.
 * 
 * @param {Array} data An array of objects, each object containing two fields: "descriptor" and
 * "resolution_description"
 */
const displayData = (data) => {
    if (data !== null && data.length > 0) {

        // Sort the data by "descriptor" in ascending order
        data.sort((firstElement, secondElement) =>
            firstElement.descriptor.toUpperCase() > secondElement.descriptor.toUpperCase() ? 1 : -1);

        console.log("Data fetched:");
        console.log(data);

        // Object used to hold a count of every different particular "descriptor" value on the data
        var descriptorCounter = {}

        let outputContainer = document.getElementById("outputContainer");

        // Iterate over the "data" array and display each complaint on the web page.
        data.forEach(element => {

            // Increase a counter of a particular descriptor
            descriptorCounter[element.descriptor] = 1 + (descriptorCounter[element.descriptor] || 0);

            let complaintContainer = document.createElement("div");

            let descriptorContainer = document.createElement("div");
            descriptorContainer.style.display = "flex";
            descriptorContainer.style.alignItems = "flex-end";
            descriptorContainer.style.margin = "5px";

            let image = document.createElement("img");
            image.src = "policeSiren.png";
            image.style.width = "20px";
            descriptorContainer.appendChild(image);

            let text = document.createElement("div");
            text.innerHTML = element.descriptor;
            text.style.width = "450px"
            text.style.marginLeft = "10px";
            text.style.marginRight = "10px";
            text.style.fontSize = "small";
            text.style.fontWeight = "bold";
            descriptorContainer.appendChild(text);

            let button = document.createElement("button");
            button.innerHTML = "WHAT DID THE POLICE DO?";
            button.style.fontSize = "x-small";
            button.style.fontWeight = "bold";
            button.style.padding = "5px";
            button.style.backgroundColor = "darkred";
            button.style.color = "white";
            button.style.border = "none";
            button.style.borderRadius = "6px";
            button.addEventListener("mouseenter", () => button.style.backgroundColor = "orange");
            button.addEventListener("mouseleave", () => button.style.backgroundColor = "darkred");
            button.addEventListener("click", event => showHideResolution(event, element.resolution_description));
            descriptorContainer.appendChild(button);

            complaintContainer.appendChild(descriptorContainer);
            outputContainer.appendChild(complaintContainer);
        });

        // Display the number of ocurrences of each different "descriptor"
        let descriptorCountersContainer = document.createElement("div");
        descriptorCountersContainer.style.marginTop = "20px"
        Object.entries(descriptorCounter).forEach(element => {
            let descriptorCountText = document.createElement("div");
            descriptorCountText.style.fontSize = "small";
            descriptorCountText.innerHTML = `"${element[0]}" was complained ${element[1]} times.`
            descriptorCountersContainer.appendChild(descriptorCountText);
        });
        outputContainer.appendChild(descriptorCountersContainer);
    }
};

/**
 * Shows the resolution of the complaint (at the bottom of the complaint) if the resolution is not 
 * already shown. Hides it otherwise.
 * 
 * @param {Event} event Contains information about the DOM event that triggered this function.
 * @param {String} resolution The resolution that corresponds to the complaint from which the button 
 * "WHAT DID THE POLICE DO?" was clicked.
 */
const showHideResolution = (event, resolution) => {
    let complaintContainer = event.target.parentElement.parentElement;
    if (complaintContainer.childElementCount === 1) {
        let resolutionContainer = document.createElement("div");
        resolutionContainer.innerHTML = resolution;
        resolutionContainer.style.width = "640px";
        resolutionContainer.style.fontSize = "small";
        resolutionContainer.style.marginTop = "15px";
        resolutionContainer.style.marginBottom = "20px";
        complaintContainer.appendChild(resolutionContainer);
    } else {
        complaintContainer.removeChild(complaintContainer.lastChild);
    }
}



