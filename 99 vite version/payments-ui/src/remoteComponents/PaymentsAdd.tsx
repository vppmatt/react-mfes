import { useEffect, useRef } from 'react';
import {mount} from 'paymentsadd/PaymentsAdd';
import { useNavigate } from 'react-router-dom';

const PaymentsAdd = () : JSX.Element => {

  const paymentsadddiv = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const onNavigate = (url : string) : void => navigate(url);

  useEffect( () => {
    mount(paymentsadddiv.current, {serverUrl : "https://payments.multicode.uk", onNavigate: onNavigate});
  } , []);

  return (
    <div ref={paymentsadddiv} />
  );
}

export default PaymentsAdd;
