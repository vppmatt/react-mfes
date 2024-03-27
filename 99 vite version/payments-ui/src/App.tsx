import './App.css';
import PaymentsAdd from './remoteComponents/PaymentsAdd';
import PaymentsList from './remoteComponents/PaymentsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHeader from './components/pageHeader/PageHeader';
import HomePage from './remoteComponents/HomePage';
import PageNotFound from './remoteComponents/PageNotFound';
import { UserContext, userType } from './context/context';
import { useState } from 'react';

function App() {

const [user,setUser] = useState<userType>( {id: 0, name : "", role : ""});

 const logout = () => {
      setUser({id: 0, name : "", role : ""});
  }

  const login = (user : userType) => {
      setUser(user);       
  }

  return (
    <UserContext.Provider value={{...user, login : login, logout : logout, onLoginStateChanged : () => {} }}>
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/find" element={<PaymentsList />} />
        <Route path="/find/:id" element={<PaymentsList />} />
        <Route path="/add" element={<PaymentsAdd />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
