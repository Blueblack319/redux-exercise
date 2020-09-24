import actionTypes from "../actions/actionTypes";
import { updatedObject } from "./utility";

const initialState = {
  results: [],
};

const storeResult = (state, action) => {
  const updatedResults = state.results.filter(
    (result) => result.id !== action.resultEleId
  );
  return updatedObject(state, { results: updatedResults });
};

const deleteResult = (state, action) => {
  const updatedResults = state.results.concat({
    id: new Date(),
    value: action.result,
  });
  return updatedObject(state, { results: updatedResults });
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return deleteResult(state, action);
    case actionTypes.DELETE_RESULT:
      return storeResult(state, action);
  }

  return state;
};

export default reducer;
