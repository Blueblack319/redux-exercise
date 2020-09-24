import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
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
          <button
            onClick={this.props.onStoreCounter.bind(this, this.props.counter)}
          >
            Store Result
          </button>
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
  // const counter = state.counterReducer.counter;
  // console.log(counter);
  return {
    counter: state.counterReducer.counter,
    storedResults: state.resultsReducer.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(5)),
    onSubtractCounter: () => dispatch(actionCreators.substract(5)),
    onStoreCounter: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteCounter: (id) => dispatch(actionCreators.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
