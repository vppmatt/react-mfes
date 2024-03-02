import {createRoot} from 'react-dom/client';
import './../index.css';
import AddTransaction, { AddTransactionProps } from './AddTransaction';

const mount = (el: Element, props: AddTransactionProps) : void => {

  const root = createRoot(el);

  root.render(<AddTransaction  {...props} />);
}

export { mount };
