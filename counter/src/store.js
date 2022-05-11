import { createStore } from "redux";
import root from "./reducers";
import changeNumber from "./reducers/Counter";


const store = createStore(root);

export default store;