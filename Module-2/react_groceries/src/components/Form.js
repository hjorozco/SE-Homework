import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            units: '',
            quantity: '',
            isPurchased: false,
        };
    }

    handleInputChange = e => {
        if (e.target.id === "isPurchased") {
            this.setState(prevState => ({ [e.target.id]: !prevState.isPurchased }));
        } else {
            this.setState({ [e.target.id]: e.target.value.trimLeft() })
        }
    }

    handleAddItemClick = e => {
        e.preventDefault();
        this.props.addItem(this.state);
        alert(`Item "${this.state.item.trim()}" added to the list`);
        this.clearState();
    }

    handleFormReset = e => {
        e.preventDefault();
        this.clearState();
    }

    clearState = () => {
        this.setState({
            item: '',
            units: '',
            quantity: '',
            isPurchased: false,
        });
    }

    render() {
        return (

            <form className="Form" onSubmit={this.handleAddItemClick} onReset={this.handleFormReset}>

                <label htmlFor="item">Item</label>
                <input
                    id="item"
                    className="Input FormInput"
                    onChange={this.handleInputChange}
                    value={this.state.item}
                    required
                />

                <label htmlFor="quantity">Quantity</label>
                <input
                    id="quantity"
                    className="Input FormInput FormInputQuantity"
                    onChange={this.handleInputChange}
                    min="0"
                    step="0.001"
                    value={this.state.quantity}
                    type="number"
                    required
                />

                <label htmlFor="units">Units</label>
                <input
                    id="units"
                    className="Input FormInput"
                    onChange={this.handleInputChange}
                    value={this.state.units}
                    required
                />
                <label htmlFor="purchased">
                    <input
                        id="isPurchased"
                        className="Input FormInput"
                        onChange={this.handleInputChange}
                        checked={this.state.isPurchased}
                        type="checkbox"
                    />
                    Purchased
                </label>
                <div className="FormButtonsContainer">
                    <button className="Button SubmitButton" type="submit">Add item</button>
                    <button className="Button ResetButton" type="reset">Clear</button>
                </div>
            </form>

        );
    }
}

export default Form;