import ReactDOM from 'react-dom/client';
import './../index.css';
import PageNotFound from './PageNotFound';

const mount = (el: Element) : void => {

  const root : ReactDOM.Root = ReactDOM.createRoot(el);

  root.render(<PageNotFound />);
}

export { mount };
