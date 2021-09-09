import Score from "./Score";

const Student = (props) => {
    return (
        <div className="studentContainer">
            <div>
                <h3>
                    {props.student.name}
                </h3>
                <p>
                    {props.student.bio}
                </p>
            </div>
            <fieldset className="scoresFieldSet">
                <legend className="boldText">Scores</legend>
                <ul>
                    {props.student.scores.map((score, index) => <li key={index}><Score score={score} /></li>)}
                </ul>
            </fieldset>
        </div>
    );
}

export default Student;