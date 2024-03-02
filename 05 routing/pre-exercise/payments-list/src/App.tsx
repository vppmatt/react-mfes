import React from 'react';
import './App.css';
import PaymentsList from './PaymentsList/PaymentsList';

function App() {
  return (
    <div>
      <h1>Payments list app</h1>
      <PaymentsList serverUrl='http://someServer' onNavigate={() => {}} initialPath={[]}/>
    </div>
  );
}

export default App;
