import {createRoot} from 'react-dom/client';
import './../index.css';
import PaymentsAdd, { PaymentsAddProps } from './PaymentsAdd';

const mount = (el: Element, props: PaymentsAddProps) : void => {

  const root = createRoot(el);

  root.render(<PaymentsAdd {...props} />);
}

export { mount };
