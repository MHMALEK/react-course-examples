const { createAction } = require("@reduxjs/toolkit");

const decreaseStoreAction = createAction("DECREASE_COUNTER");
const increaseStoreAction = createAction("INCREASE_COUNTER");

export { decreaseStoreAction, increaseStoreAction };
