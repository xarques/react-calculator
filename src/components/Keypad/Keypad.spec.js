import React from 'react';
import {mount, shallow} from 'enzyme';
import Keypad from './Keypad';

const keyPadComponent = <Keypad
  callOperator={jest.fn()}
  numbers={[]}
  operators={[]}
  setOperator={jest.fn()}
  updateDisplay={jest.fn()}
/>

describe('Keypad', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(keyPadComponent);
  })
  it('should render 4 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });

  it('should render an instance of the Key component for each index of numbers, operators and the submit key', () => {
    const numbers = ['0', '1'];
    const operators = ['+', '-'];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    wrapper.setProps({numbers, operators});
    expect(wrapper.find("Key").length).toEqual(keyTotal);
  });
});

describe('mounted Keypad', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(keyPadComponent)
  });

  it('renders the values of numbers to the DOM', () => {
    wrapper.setProps({numbers: ['0','1','2']});
    expect(wrapper.find('.numbers-container').text()).toEqual('012');
  });

  it('renders the values of operators to the DOM', () => {
    wrapper.setProps({operators: ['+', '-', '*', '/']});
    expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
