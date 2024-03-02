import {createRoot} from 'react-dom/client';
import './../index.css';
import HomePage from './HomePage';

const mount = (el: Element) : void => {

  const root = createRoot(el);

  root.render(<HomePage />);
}

export { mount };
