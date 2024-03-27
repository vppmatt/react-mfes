
import './App.css';
import HomePage from './HomePage/HomePage';
import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <h1>Static pages app</h1>
      <HomePage id={0} login = { ()=> {} } logout = { () => {} }/>
      <PageNotFound />
    </div>
  );
}

export default App;
