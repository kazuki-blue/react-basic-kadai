import { useState } from 'react';
import './App.css'
/*======== 後略 =========*/
// import { CounterDisplay } from './CounterDisplay';
// import { CounterButton } from './CounterButton';

export function Calculator() {
  // カウント状態
  const [display, setDisplay] = useState("");

  const calculate = (expression) => {
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;
    const match = expression.match(validExpression);
    if (!match) {
      throw new Error('エラー');
    }

    const num1 = Number(match[1]);
    const operator = match[2];
    const num2 = Number(match[3]);

    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      // default:
      //   throw new Error('無効な演算子です。');
    }
  };

  // カウントを加算するイベントハンドラ
  const handleClick = (btn) => {

    if (display === '0' || display === 'エラー') {
      setDisplay(""); //
    }

    if (btn === 'C') {
      setDisplay("");
    } else if (btn === '=') {      
      try {
        const result = calculate(display);
        setDisplay(String(result));
      } catch (e) {
        setDisplay(e.message); // または 'Error' など、指示に従う
      }
    } else {
      setDisplay(prevDisplay => prevDisplay + btn);
    }
  };


  // ボタンの配置を表す配列（記述順に表示）
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ];


  return (
    <div className='container'>
      <h2 className="calculator-h2">電卓アプリ</h2>
      {display === "" ? <div className='calculator-container'>0</div> : <div className='calculator-container'>{display}</div>}
      <div className="button-grid">
      {buttons.map((btn) => (
        <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
      ))}
    </div>
    </div>
  );
};