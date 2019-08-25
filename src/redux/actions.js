import { CHANGE_SEARCH_INPUT } from "./constants";

export const setSearchInput = input => ({
  type: CHANGE_SEARCH_INPUT,
  payload: input
});
