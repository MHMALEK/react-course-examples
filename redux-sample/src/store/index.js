import appReducer from "./reducer";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({ reducer: appReducer });
export default store;
