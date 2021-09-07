import React from 'react';
import ListContainer from './ListContainer';
import AddItemContainer from './AddItemContainer';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          item: "Flour",
          units: "pounds",
          quantity: 1,
          isPurchased: false,
        },
        {
          item: "Milk",
          units: "liters",
          quantity: 2,
          isPurchased: false,
        },
        {
          item: "Sugar",
          units: "pounds",
          quantity: 0.5,
          isPurchased: true,
        },
      ],
    }
  }

  addItem = item => {
    const groceries = this.state.groceries.slice();
    this.setState({
      groceries: groceries.concat([item]),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="AppTitle">GROCERIES</div>
        <ListContainer groceries={this.state.groceries}></ListContainer>
        <AddItemContainer addItem = {this.addItem} />
      </div>
    );
  }

}

export default App;
