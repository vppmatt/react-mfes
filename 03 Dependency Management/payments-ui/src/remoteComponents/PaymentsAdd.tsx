import React, { useEffect, useRef } from 'react';
import {mount} from 'paymentsadd/PaymentsAdd';

const PaymentsAdd = () : JSX.Element => {

  const paymentsadddiv = useRef<HTMLDivElement>(null);

  useEffect( () => {
    mount(paymentsadddiv.current);
  } , []);

  return (
    <div ref={paymentsadddiv} />
  );
}

export default PaymentsAdd;
