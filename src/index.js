import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/results";
import { Provider } from "react-redux";

const rootReducer = combineReducers({ counterReducer, resultsReducer });

// const logger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("[Middleware] Dispatching", action);
//       const result = next(action);
//       console.log("[Middleware] next state", store.getState());
//       return result;
//     };
//   };
// };

const logger = (store) => (next) => (action) => {
  console.log("[Middleware] Dispatching", action);
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달합니다. 즉, 이미 실행 끝
  console.log("[Middleware] next state", store.setState);
  return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본: undefined
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
