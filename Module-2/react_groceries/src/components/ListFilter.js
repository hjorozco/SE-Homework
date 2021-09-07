import React from 'react';

class ListFilter extends React.Component {

    handleChange = e => {
        this.props.onFilterChange(e.target.value);
    }

    render() {
        return (
            <div className="ListFilter">
                <div className="ListFilterLabel1">Display</div>
                <select className="Input" onChange={this.handleChange}>
                    <option value="not purchased">not purchased</option>
                    <option value="purchased">purchased</option>
                    <option value="all">all</option>
                </select>
                <div className="ListFilterLabel2">items</div>
            </div>
        )
    }
}

export default ListFilter;