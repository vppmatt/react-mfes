import React, { useEffect, useRef, useState } from 'react';
import {mount} from 'paymentslist/PaymentsList';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentsList = () : JSX.Element => {

  const paymentslistdiv = useRef<HTMLDivElement>(null);

  const [url, setUrl] = useState<string>("https://payments.multicode.uk/");

  const navigate = useNavigate();

  const onNavigate = (newUrl: string) => navigate(newUrl);
  
  useEffect( () => {
    mount(paymentslistdiv.current, {serverUrl: url, onNavigate, initialPath: [`${location.pathname}${location.search}`] });
  } , []);

  return (
    <><div ref={paymentslistdiv} />
    <button onClick={ () => {setUrl("matt")}}>hello</button>
    {url}
    </>
  );
}

export default PaymentsList;
