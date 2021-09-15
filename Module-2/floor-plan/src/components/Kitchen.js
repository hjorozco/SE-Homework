import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = () => {
    return (
        <div className="Kitchen">
            <Oven />
            <Sink />
            <div className="KitchenLabel Centered">
                Kitchen
            </div>
        </div>
    );
}

export default Kitchen;