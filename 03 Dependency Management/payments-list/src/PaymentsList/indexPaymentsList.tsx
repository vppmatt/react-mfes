import {createRoot} from 'react-dom/client';
import './../index.css';
import PaymentsList from './PaymentsList';

const mount = (el: Element) : void => {

  const root  = createRoot(el);

  root.render(<PaymentsList />);
}

export { mount };
