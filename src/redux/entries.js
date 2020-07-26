import * as ActionTypes from "./ActionTypes";

export const Entries = (
  state = {
    errMess: null,
    entries: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_ENTRIES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        entries: action.payload,
      };

    case ActionTypes.ENTRIES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        entries: [],
      };

    case ActionTypes.ADD_ENTRY:
      const entry = action.payload;
      return { ...state, entry: state.entries.concat(entry) };

    default:
      return state;
  }
};
