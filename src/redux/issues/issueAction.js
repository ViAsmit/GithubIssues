import axios from "axios";
import { FETCH_ISSUES } from "./issueType";

export const fetchIssues = (page) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.github.com/repos/facebook/react/issues?per_page=10&&page=${page}`,
      {
        u: process.env.GITHUB_KEY,
      }
    );
    if (response.status === 200) {
      dispatch({
        type: FETCH_ISSUES,
        payload: response.data,
      });
    }
  };
};

export const sortNewest = () => {
  return {
    type: "SORT_NEWEST",
  };
};

export const sortOldest = () => {
  return {
    type: "SORT_OLDEST",
  };
};
