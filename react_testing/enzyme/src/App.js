import React from 'react';
import './App.css';
import Profile from './components/Profile';
import HookCounter from './components/HookCounter';
function App() {
  return (
    <div>
      <Profile username="soobinnn" name="임수빈"/>
      <HookCounter/>
    </div>
  );
}

export default App;
