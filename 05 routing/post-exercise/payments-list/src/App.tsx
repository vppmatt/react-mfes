import React from 'react';
import './App.css';
import PaymentsList from './PaymentsList/PaymentsList';
import FindTransactionPage from './PaymentsList/FindTransactionPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1>Payments list app</h1>
      <FindTransactionPage serverUrl='http://someServer' onNavigate={() => {}} initialPath={[]}/>
    </BrowserRouter>
  );
}

export default App;
