import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

/** Quote Handling */
export const fetchQuotes = () => (dispatch) => {
  dispatch(quotesLoading());

  return fetch(baseUrl + "quotes")
    .then((response) => response.json())
    .then((quotes) => {
      console.log(quotes);
      dispatch(addQuotes(quotes));
    });
};

export const quotesLoading = () => ({
  type: ActionTypes.QUOTES_LOADING,
});

export const quotesFailed = (errMess) => ({
  type: ActionTypes.QUOTES_FAILED,
  payload: errMess,
});

export const addQuotes = (quotes) => ({
  type: ActionTypes.ADD_QUOTES,
  payload: quotes,
});

/** Entry Handling */

export const fetchEntries = () => (dispatch) => {
  return fetch(baseUrl + "entries")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((entries) => dispatch(addEntries(entries)))
    .catch((error) => dispatch(entriesFailed(error.message)));
};

export const entriesFailed = (errMess) => ({
  type: ActionTypes.ENTRIES_FAILED,
  payload: errMess,
});

export const addEntries = (entries) => ({
  type: ActionTypes.ADD_ENTRIES,
  payload: entries,
});

export const addComment = (entry) => ({
  type: ActionTypes.ADD_ENTRY,
  payload: entry,
});

export const addEntry = (entryId, day, year, text) => (dispatch) => {
  const newEntry = {
    entry: entryId,
    day: day,
    year: year,
    text: text,
  };
  console.log("Entry: ", newEntry);

  //const bearer = "Bearer " + localStorage.getItem("token");

  return fetch(baseUrl + "entries", {
    method: "POST",
    body: JSON.stringify(newEntry),
    headers: {
      "Content-Type": "application/json",
      //Authorization: bearer,
    },
    //credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addEntry(response)))
    .catch((error) => {
      console.log("post entry", error.message);
      alert("Your entry could not be posted\nError: " + error.message);
    });
};
