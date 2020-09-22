import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import { connect } from "react-redux";

class Counter extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <div>
          <button onClick={this.props.onStoreCounter}>Store Result</button>
          <ul>
            {this.props.storedResults.map((strResult) => (
              <li
                key={strResult.id}
                // onClick={this.props.onDeleteCounter.bind(this, strResult.id)}
                onClick={() => this.props.onDeleteCounter(strResult.id)}
              >
                {strResult.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", value: 5 }),
    onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 5 }),
    onStoreCounter: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteCounter: (id) =>
      dispatch({ type: "DELETE_RESULT", resultEleId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
