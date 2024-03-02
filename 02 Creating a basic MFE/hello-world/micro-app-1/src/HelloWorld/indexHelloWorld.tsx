import ReactDOM from 'react-dom/client';
import './../index.css';
import HelloWorld from './HelloWorld';

const mount = (el: Element) : void => {

  const root : ReactDOM.Root = ReactDOM.createRoot(el);

  root.render(<HelloWorld />);
}

export { mount };
