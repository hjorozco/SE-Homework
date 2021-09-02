import React from 'react';

/**
 * The state "caps" property value is changed on click. The "name" prop passed down from the App 
 * component is displayed as upercase or lowercase depending on "caps" value. 
 */
class DivThree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            caps: false,
        };
    }

    changeIt() {
        this.setState(
            {
                caps: !this.state.caps,
            }
        )
    }

    render() {
        return (
            <div>
                <h3 onClick={() => this.changeIt()}>
                    {this.state.caps ?
                        this.props.text.toUpperCase() :
                        this.props.text.toLowerCase()}
                </h3>
            </div>
        )
    }
}

export default DivThree;