import React from "react";
import Form from "./Form";

class AddItemContainer extends React.Component {
    render() {
        return (
            <div className="Container AddItemContainer">
                <div className="FormTitle">
                    <div>Add item to the list</div>
                </div>
                <Form addItem={this.props.addItem} />
            </div>
        );
    }
}

export default AddItemContainer;

