import React, {Component} from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayValue: '0',
      numbers: [],
      operators: [],
      selectedOperator: '',
      storedValue: '',
    }
  }

  callOperator() {
    console.log('call operation');
  }

  setOperator() {
    console.log('set operation');
  }

  updateDisplay() {
    console.log('update display');
  }

  render() {
    return(
      <div className='calculator-container' />
    );
  }
}

export default Calculator;
