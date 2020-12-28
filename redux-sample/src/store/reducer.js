import { createAction, createReducer } from "@reduxjs/toolkit";

const { default: initState } = require("./state");

// const appReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "INCREASE_COUNTER":
//       return {
//         ...state,
//         counter: action.payload.counter,
//       };
//     case "DECREASE_COUNTER":
//       return {
//         ...state,
//         counter: action.payload.counter,
//       };

//     default:
//       return {
//         ...state,
//       };
//   }
// };

const decreaseStoreAction = createAction("DECREASE_COUNTER");
const increaseStoreAction = createAction("INCREASE_COUNTER");

const appReducer = createReducer(initState, {
  [decreaseStoreAction.type]: (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  },
  [increaseStoreAction.type]: (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  },
});

export default appReducer;
