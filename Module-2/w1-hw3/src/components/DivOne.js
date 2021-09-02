import React from 'react';
import DivTwo from './DivTwo';

class DivOne extends React.Component {

    render() {
        return (
            <div>
                <DivTwo
                    text={this.props.text}
                />
            </div>
        )
    }
}

export default DivOne;