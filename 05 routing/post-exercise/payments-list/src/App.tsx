import React from 'react';
import './App.css';
import PaymentsList from './PaymentsList/PaymentsList';
import FindTransactionPage from './PaymentsList/FindTransactionPage';

function App() {
  return (
    <div>
      <h1>Payments list app</h1>
      <FindTransactionPage serverUrl='http://someServer' onNavigate={() => {}} initialPath={[]}/>
    </div>
  );
}

export default App;
