export const actionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  ADD: "ADD",
  SUBSTRACT: "SUBSTRACT",
  STORE_RESULT: "STORE_RESULT",
  DELETE_RESULT: "DELETE_RESULT",
};

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const add = (value) => {
  return {
    type: actionTypes.ADD,
    value,
  };
};

export const substract = (value) => {
  return {
    type: actionTypes.SUBSTRACT,
    value,
  };
};

const storeResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result,
  };
};

export const storeResultAsync = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(storeResult(result));
    }, 2000);
  };
};

export const deleteResult = (resultEleId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultEleId,
  };
};
