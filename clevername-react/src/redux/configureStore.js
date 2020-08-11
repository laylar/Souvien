import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Quotes } from "./quotes";
import { Entries } from "./entries";
import { createForms } from "react-redux-form";
import { InitialEntry } from "./entryForm";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      quotes: Quotes,
      entries: Entries,
      ...createForms({
        entryForm: InitialEntry,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
