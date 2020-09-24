import actionTypes from "../actions/actionTypes";
import { updatedObject } from "./utility";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case actionTypes.STORE_RESULT: {
      const updatedResults = state.results.concat({
        id: new Date(),
        value: action.result,
      });
      return updatedObject(state, { results: updatedResults });
    }

    case actionTypes.DELETE_RESULT: {
      const updatedResults = state.results.filter(
        (result) => result.id !== action.resultEleId
      );
      return updatedObject(state, { results: updatedResults });
    }
  }

  return state;
};

export default reducer;
