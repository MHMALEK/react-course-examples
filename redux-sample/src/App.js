import logo from "./logo.svg";
import "./App.css";
import { decreaseStoreAction, increaseStoreAction } from "./store/action";
import { useDispatch, useSelector } from "react-redux";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       internalStateCounter: 0,
//     };
//   }
//   render() {
//     console.log(this.props.counterState);
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <button onClick={() => this.props.increaseCounterInState()}>
//             increase counter
//           </button>
//           Redux: {this.props.counterState}
//         </header>
//       </div>
//     );
//   }
// }

// const mapSateToProps = (state) => {
//   return {
//     counterState: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounterInState: () => dispatch(increaseStoreAction),
//   };
// };

// export default connect(mapSateToProps, mapDispatchToProps)(App);

const App = () => {
  const increaseCounterInState = () => {
    dispatch(increaseStoreAction());
  };
  const dispatch = useDispatch();
  const counterStateFromStore = useSelector((state) => state.counter);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => increaseCounterInState()}>
          increase counter
        </button>
        <button onClick={() => dispatch(decreaseStoreAction())}>
          decrease counter
        </button>
        Redux: {counterStateFromStore}
      </header>
    </div>
  );
};

export default App;
