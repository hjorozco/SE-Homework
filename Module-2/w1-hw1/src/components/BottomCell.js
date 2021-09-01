import graph from '../images/bar-chart.svg'

export const BottomCell = props =>
    <div className="Bottom Cell">
        <p>{props.label}</p>
        <div className="Value">
            {props.value}
            <span className="Description">
                {props.description}
            </span>
        </div>
        <div className="GraphContainer">
            <img src={graph} className="Graph" alt="Graph" />
        </div>
    </div>;