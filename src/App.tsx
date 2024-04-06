import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createUser } from './services/apiService'

function App() {
  return (
    <button onClick={() => createUser()}>Click</button>
  );
}

export default App;
