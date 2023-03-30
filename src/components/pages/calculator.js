import React, { useState } from 'react';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(
    {
      total: 0,
      next: null,
      operation: null,
    },
  );

  const onClickHandler = (event) => {
    const value = event.target.innerText;
    const answer = calculate(state, value);
    setState(answer);
  };

  const { total, next, operation } = state;

  return (
    <div className="container">
      <h2>
        Let&apos;s do some math!
      </h2>
      <div className="calc">
        <ul className="calclines">
          <li className="firstrow">
            {total}
            {operation}
            {next}
          </li>
          <li className="row">
            <button type="button" onClick={onClickHandler} className="number">AC</button>
            <button type="button" onClick={onClickHandler} className="number">+/-</button>
            <button type="button" onClick={onClickHandler} className="number">%</button>
            <button type="button" onClick={onClickHandler} className="number end">&divide;</button>
          </li>
          <li className="row">
            <button type="button" onClick={onClickHandler} className="number">7</button>
            <button type="button" onClick={onClickHandler} className="number">8</button>
            <button type="button" onClick={onClickHandler} className="number">9</button>
            <button type="button" onClick={onClickHandler} className="number end">x</button>
          </li>
          <li className="row">
            <button type="button" onClick={onClickHandler} className="number">4</button>
            <button type="button" onClick={onClickHandler} className="number">5</button>
            <button type="button" onClick={onClickHandler} className="number">6</button>
            <button type="button" onClick={onClickHandler} className="number end">-</button>
          </li>
          <li className="row">
            <button type="button" onClick={onClickHandler} className="number">1</button>
            <button type="button" onClick={onClickHandler} className="number">2</button>
            <button type="button" onClick={onClickHandler} className="number">3</button>
            <button type="button" onClick={onClickHandler} className="number end">+</button>
          </li>
          <li className="lastrow">
            <button type="button" onClick={onClickHandler} className="number">0</button>
            <button type="button" onClick={onClickHandler} className="number">.</button>
            <button type="button" onClick={onClickHandler} className="number end">=</button>
          </li>
        </ul>
      </div>
    </div>

  );
};

export default Calculator;
