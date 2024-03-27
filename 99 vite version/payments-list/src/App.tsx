import './App.css';
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
