'use client';

import { useState } from 'react';

export const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [hasResult, setHasResult] = useState(false);

  const calculate = (expression: string): number => {
    const tokens = expression.trim().split(' ').filter(token => token !== '');
    
    if (tokens.length < 3) {
      return parseFloat(tokens[0] || '0');
    }

    let result = parseFloat(tokens[0]);
    
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);

      if (isNaN(operand)) {
        throw new Error('Nombre invalide');
      }

      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          if (operand === 0) {
            throw new Error('Division par zéro');
          }
          result /= operand;
          break;
        default:
          throw new Error('Opérateur invalide');
      }
    }

    return result;
  };

  const handleNumber = (number: string) => {
    if (hasResult) {
      setDisplay(number);
      setEquation(number);
      setHasResult(false);
    } else {
      if (display === '0' && number !== '.') {
        setDisplay(number);
        setEquation(equation === '0' ? number : equation + number);
      } else if (!(number === '.' && display.includes('.'))) {
        setDisplay(display + number);
        setEquation(equation + number);
      }
    }
  };

  const handleOperator = (operator: string) => {
    if (equation === '') return;
    
    setHasResult(false);
    setDisplay('0');
    
    // Si le dernier caractère est un opérateur, le remplacer
    if (['+', '-', '*', '/'].includes(equation.trim().slice(-1))) {
      setEquation(equation.trim().slice(0, -1) + ' ' + operator + ' ');
    } else {
      setEquation(equation + ' ' + operator + ' ');
    }
  };

  const handleEqual = () => {
    if (equation === '') return;

    try {
      const result = calculate(equation);
      const formattedResult = Number.isInteger(result) 
        ? result.toString()
        : result.toFixed(8).replace(/\.?0+$/, '');
      
      setDisplay(formattedResult);
      setEquation(formattedResult);
      setHasResult(true);
    } catch {
      setDisplay('Erreur');
      setEquation('');
      setHasResult(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setHasResult(false);
  };

  return (
    <div className="w-full max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 bg-gray-900">
        <div className="text-right">
          <div className="text-gray-400 text-sm h-6 overflow-hidden">
            {equation || '0'}
          </div>
          <div className="text-white text-3xl font-semibold truncate">
            {display}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-1 p-2 bg-gray-800">
        <button
          onClick={handleClear}
          className="col-span-2 p-4 text-white bg-red-500 hover:bg-red-600 rounded transition"
        >
          AC
        </button>
        <button
          onClick={() => handleOperator('/')}
          className="p-4 text-white bg-gray-700 hover:bg-gray-600 rounded transition"
        >
          ÷
        </button>
        <button
          onClick={() => handleOperator('*')}
          className="p-4 text-white bg-gray-700 hover:bg-gray-600 rounded transition"
        >
          ×
        </button>
        
        {['7', '8', '9'].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num)}
            className="p-4 text-white bg-gray-700 hover:bg-gray-600 rounded transition"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleOperator('-')}
          className="p-4 text-white bg-gray-700 hover:bg-gray-600 rounded transition"
        >
          -
        </button>
        
        {['4', '5', '6'].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num)}
            className="p-4 text-white bg-gray-700 hover:bg-gray-600 rounded transition"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleOperator('+')}
          className="p-4 text-white bg-gray-700 hover:bg-gray-600 rounded transition"
        >
          +
        </button>
        
        {['1', '2', '3'].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num)}
            className="p-4 text-white bg-gray-700 hover:bg-gray-600 rounded transition"
          >
            {num}
          </button>
        ))}
        <button
          onClick={handleEqual}
          className="row-span-2 p-4 text-white bg-blue-500 hover:bg-blue-600 rounded transition"
        >
          =
        </button>
        
        <button
          onClick={() => handleNumber('0')}
          className="col-span-2 p-4 text-white bg-gray-700 hover:bg-gray-600 rounded transition"
        >
          0
        </button>
        <button
          onClick={() => handleNumber('.')}
          className="p-4 text-white bg-gray-700 hover:bg-gray-600 rounded transition"
        >
          .
        </button>
      </div>
    </div>
  );
}; 