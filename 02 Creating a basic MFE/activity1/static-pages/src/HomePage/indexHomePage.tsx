import ReactDOM from 'react-dom/client';
import './../index.css';
import HomePage from './HomePage';

const mount = (el: Element) : void => {

  const root : ReactDOM.Root = ReactDOM.createRoot(el);

  root.render(<HomePage />);
}

export { mount };
