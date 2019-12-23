import React from 'react';
import './App.css';
import DecoratorTest from './test/DecoratorTest';
import Counter1 from './components/Counter1';

function App() {
  return (
    <div className="App">
      <DecoratorTest/>
      <Counter1/>
    </div>
  );
}

export default App;