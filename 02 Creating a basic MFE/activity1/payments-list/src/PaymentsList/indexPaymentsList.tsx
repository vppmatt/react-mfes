import ReactDOM from 'react-dom/client';
import './../index.css';
import PaymentsList from './PaymentsList';

const mount = (el: Element) : void => {

  const root : ReactDOM.Root = ReactDOM.createRoot(el);

  root.render(<PaymentsList />);
}

export { mount };
