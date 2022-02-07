import React, { Component } from 'react';
import GreetingInput from './GreetingInput';
import GreetingOutput from './GreetingOutput';


export class App extends Component {
  // constructor(props) {
     // super(props)
      //this.state = {
      //  planet: 'Venus'
      //}
    //}
  state = {
    planet: "Venus",
  };

  renderInput(event) {
    this.setState({ planet: event.target.value });
  }

  render() {
    // const planet = "Venus";
    const { planet } = this.state;
    return (
      <div>
        <GreetingOutput planet={planet} />
        <GreetingInput renderInput={this.renderInput.bind(this)}/>
    </div>
    );
}
}


export default App;