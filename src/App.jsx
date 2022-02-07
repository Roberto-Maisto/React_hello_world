import React, { Component } from 'react';
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

  render() {
    // const planet = "Venus";
    const { planet } = this.state;
    return (
      <div>
        <GreetingOutput planet={planet} />
        <input type="text" placeholder="Enter planet name"
          onChange={(event) => {
            this.setState({ planet: event.target.value });
          }}
        />
    </div>
    );
}
}


export default App;