import React from 'react';

class List extends React.Component {
    render() {
        let filter = this.props.filter;

        return (
            <ul className="List">
                {
                    this.props.groceries.map(
                        (grocery, index) => {
                            let listItem = <li key={index}>
                                {grocery.item} - {grocery.quantity} {grocery.units}
                            </li>;
                            if (filter === "purchased" && grocery.isPurchased)
                                return listItem;
                            else if (filter === "not purchased" && !grocery.isPurchased)
                                return listItem;
                            else if (filter === "all")
                                return listItem;
                            return null;
                        }
                    )
                }
            </ul>
        );
    }
}

export default List;