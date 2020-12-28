import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useCustomHook from "./hooks/useCustomHook";

class AppComponentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: 0,
    };
    // this.handleSomeEvent = this.handleSomeEvent.bind(this);
  }
  componentDidMount() {}
  componentDidUpdate(prevState) {}
  componentWillUnmount() {}

  render() {
    return <div className="App">Class Version</div>;
  }
}

function App() {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(10);
  const [showComponent, setShowComponent] = useState(true);
  const handleSomeEvent = () => {};
  const handleIncreaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const handleDecreaseCounter = () => {
    setCounterTwo((prevCounter) => prevCounter - 1);
  };

  const handleShowComponent = () => {
    setShowComponent((prevState) => !prevState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={handleIncreaseCounter}>increase</button>
        <button onClick={handleDecreaseCounter}>Decrease</button>
        <button onClick={handleShowComponent}>toggle Component</button>
        <p>Counter: {counter}</p>
        <p>CounterTow: {counterTwo}</p>
        <SomeComponent counter={counter} counterTwo={counterTwo} />
      </header>
    </div>
  );
}

const SomeComponent = React.memo(({ counterTwo, counter }) => {
  const [someName, setSomeName] = useState("malek");

  const name = useCustomHook();
  console.log(name);

  
  const someChange = () => console.log(counterTwo + 1);
  useMemo(() => {}, [counterTwo]);

  return (
    <div onClick={() => setSomeName("new Name")}>
      <p>Counter PRops: {counterTwo}</p> <p> name: {someName} </p>{" "}
    </div>
  );
});

export default App;
