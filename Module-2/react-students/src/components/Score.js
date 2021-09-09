
const Score = (props) => {
    return (
        <div className="scoresContainer">
            <div className="boldText score">{props.score.score}</div>
            <div className="italicText">({props.score.date})</div>
        </div>
    );
}

export default Score;