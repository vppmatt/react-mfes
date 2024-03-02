import React, { useEffect, useRef, useState } from 'react';
import {mount} from 'paymentslist/PaymentsList';

const PaymentsList = () : JSX.Element => {

  const paymentslistdiv = useRef<HTMLDivElement>(null);

  const [url, setUrl] = useState<string>("https://payments.multicode.uk/");

  useEffect( () => {
    mount(paymentslistdiv.current, {serverUrl: url});
  } , []);

  return (
    <><div ref={paymentslistdiv} />
    <button onClick={ () => {setUrl("matt")}}>hello</button>
    {url}
    </>
  );
}

export default PaymentsList;
