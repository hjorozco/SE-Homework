import Bedroom from "./Bedroom";
import LivingRoom from "./LivingRoom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";

const FloorPlan = () => {
    return (
        <div className="FloorPlan">
            <Bedroom bedNum="1" />
            <LivingRoom />
            <Kitchen />
            <Bath size="Full" />
            <Bedroom bedNum="2" />
            <Bath size="Half" />
            <Bedroom bedNum="3" />
        </div>
    );
}

export default FloorPlan;