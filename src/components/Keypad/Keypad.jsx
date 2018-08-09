import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key';
import './Keypad.css';

const Keypad = ({callOperator, numbers, operators, setOperator, updateDisplay}) => {
  const displayedNumbers = numbers.map(number => {
    return (
      <Key
        key={number}
        keyAction={updateDisplay}
        keyType="number-key"
        keyValue={number}
      />
    )
  });

  const displayedOperators = operators.map(operator => {
    return (
      <Key
        key={operator}
        keyAction={setOperator}
        keyType="operator-key"
        keyValue={operator}
      />
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
      <div className="submit-container">
        <Key
          keyAction={callOperator}
          keyType="submit-key"
          keyValue="="
        />
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
