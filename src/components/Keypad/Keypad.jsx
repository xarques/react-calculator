import React from 'react';
import PropTypes from 'prop-types';
import './Keypad.css';

const Keypad = ({callOperator, numbers, operators, setOperator, updateDisplay}) => {
  const displayedNumbers = numbers.map(number => {
    return (
      <p key={number}>{number}</p>
    )
  });

  const displayedOperators = operators.map(operator => {
    return (
      <p key={operator}>{operator}</p>
    )
  });

  return (
    <div className="keypad-container">
      <div className="numbers-container">
        {displayedNumbers}
      </div>
      <div className="operators-container">
        {displayedOperators}
      </div>
    </div>
  );
}

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
};

export default Keypad;
