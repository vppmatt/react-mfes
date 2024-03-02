import ReactDOM from 'react-dom/client';
import './../index.css';
import PaymentsAdd from './PaymentsAdd';

const mount = (el: Element) : void => {

  const root : ReactDOM.Root = ReactDOM.createRoot(el);

  root.render(<PaymentsAdd />);
}

export { mount };
