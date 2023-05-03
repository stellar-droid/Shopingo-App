import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

// compose Enhancer for advanced store:-
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

// connect middleware to redux by applyMiddlware
