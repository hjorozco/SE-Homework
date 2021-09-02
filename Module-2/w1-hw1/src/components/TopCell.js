export const TopCell = props => {
    if (props.values === undefined) {
        return (
            <div className="Top Cell">
                <p>{props.label}</p>
                <div className="Value">{props.value}</div>
            </div>
        );
    } else {
        return (
            <div className="Top Cell">
                <p>{props.label}</p>
                <ul className="Values">
                    {props.values.map((value, index) =>
                        <li key={index}>
                            {value[0]}
                            <span className="Description">
                                {value[1]}
                            </span>
                        </li>)}
                </ul>
            </div>
        );
    }
}