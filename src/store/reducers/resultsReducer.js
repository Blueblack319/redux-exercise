import { actionTypes } from "../actions/actions";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result,
        }),
      };
    case actionTypes.DELETE_RESULT:
      // const updatedResults = [...state.results];
      // updatedResults.splice(action.resultEleId, 1)
      const updatedResults = state.results.filter(
        (result) => result.id !== action.resultEleId
      );
      return {
        ...state,
        results: updatedResults,
      };
  }

  return state;
};

export default reducer;
