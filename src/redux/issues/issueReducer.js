import { FETCH_ISSUES, SORT_NEWEST, SORT_OLDEST } from "./issueType";

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return [...state, ...action.payload];
    case SORT_NEWEST:
      return [...state.sort((a, b) => b.number - a.number)];
    case SORT_OLDEST:
      return [...state.sort((a, b) => a.number - b.number)];
    default:
      return state;
  }
};

export default postReducer;
