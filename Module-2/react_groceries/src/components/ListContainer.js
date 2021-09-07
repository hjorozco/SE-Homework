import React from "react";
import ListFilter from "./ListFilter";
import List from "./List";

class ListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: "not purchased",
        }
    }

    handleFilterChange = (filter) => {
        this.setState(
            {
                filter: filter,
            }
        )
    }

    render() {
        return (
            <div className="Container ListContainer">
                <ListFilter onFilterChange={this.handleFilterChange} />
                <List groceries={this.props.groceries} filter={this.state.filter} />
            </div>
        );
    }
}

export default ListContainer;

