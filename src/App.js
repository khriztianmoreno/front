import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
