const Bedroom = props => {
    return (
        <div className="Bedroom Centered" id={`Bedroom-${props.bedNum}`}>
            {`Bedroom ${props.bedNum}`}
        </div>
    );
}

export default Bedroom;