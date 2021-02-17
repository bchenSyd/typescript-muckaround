import React from "react";
import "./styles.css";

function wizardPageDecoratorFactory() {
  return (Component) => {
    debugger;
    Component.prototype.componentDidMount = () => {
      alert("mount");
    };
  };
}

@wizardPageDecoratorFactory()
class App extends React.Component {
  // this is NOT a class property/field, and is NOT bound by default
  // (as you wont' call it directly, react will call it by `call(this)` , so it's not your concern)
  componentWillMount() {
    debugger;
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
