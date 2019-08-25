import { CHANGE_SEARCH_INPUT } from "./constants";

const initialState = {
  searchInput: ""
};

export const searchCharacters = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
};
