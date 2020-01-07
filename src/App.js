import React, { useState } from 'react';
import './styles.css';

import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';

export default function App() {
  const [state, setState] = useState({
    globalForm: {},
    step: 0
  });
  const totalSteps = 3;

  const next = values => {
    setState(prevState => {
      const newGlobalForm = {
        ...prevState.globalForm,
        ...values
      };

      const newStep = Math.min(prevState.step + 1, totalSteps);

      return {
        globalForm: newGlobalForm,
        step: newStep
      };
    });
  };

  const prev = () => {
    setState(prevState => {
      return {
        ...prevState,
        step: Math.max(0, prevState.step - 1)
      };
    });
  };

  console.log(state);

  return (
    <div>
      {state.step === 0 && (
        <Form1 initialState={state.globalForm} prev={prev} next={next} />
      )}
      {state.step === 1 && (
        <Form2 initialState={state.globalForm} prev={prev} next={next} />
      )}
      {state.step === 2 && (
        <Form3 initialState={state.globalForm} prev={prev} next={next} />
      )}
      {state.step === 3 && (
        <Form4 initialState={state.globalForm} prev={prev} next={next} />
      )}
    </div>
  );
}
