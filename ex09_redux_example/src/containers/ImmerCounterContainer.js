import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/immerCounter';

class ImmerCounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { color, number } = this.props;
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = ({ immerCounter }) => ({
  color: immerCounter.color,
  number: immerCounter.number,
});

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(ImmerCounterContainer);
