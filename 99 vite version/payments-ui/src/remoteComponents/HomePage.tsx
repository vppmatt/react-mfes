import  { useContext, useEffect, useRef } from 'react';
import {mount} from 'staticpages/HomePage';
import { UserContext, homepageMountReturnType, userContextType, userType } from '../context/context';

const HomePage = () : JSX.Element => {

  const userContext = useContext<userContextType>(UserContext);
  const homepagediv = useRef<HTMLDivElement>(null);

  const login = (user: userType) : void => {
    userContext.login(user);
    userContext.onLoginStateChanged(user.id);
  }

  const logout = () : void => {
    userContext.logout();
    userContext.onLoginStateChanged(0);
  }

  useEffect( () => {
    const result : homepageMountReturnType = mount(homepagediv.current, {id : userContext.id, login, logout});
    userContext.onLoginStateChanged = result.onLoginStateChanged;    
  } , []); //note no dependencies so that we don't update the child component when the user state changes

  return (
    <div ref={homepagediv} />
  );
}

export default HomePage;

