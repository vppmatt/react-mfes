import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentsAdd from './PaymentsAdd/PaymentsAdd';

function App() {
  return (
    <div>
      <h1>Payments list app</h1>
      <PaymentsAdd serverUrl='http://someserver'/>
    </div>
  );
}

export default App;
