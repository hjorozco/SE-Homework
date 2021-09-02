import React from 'react'
import DivOne from './components/DivOne';

class App extends React.Component {

  render() {
    return (
      <div>
        <DivOne
          text={this.props.text}
        />
      </div>
    );
  }

}

export default App;
