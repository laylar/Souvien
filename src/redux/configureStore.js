import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Quotes } from "./quotes";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      quotes: Quotes,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
