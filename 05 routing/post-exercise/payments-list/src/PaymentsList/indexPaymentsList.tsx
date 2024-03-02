import {createRoot} from 'react-dom/client';
import './../index.css';
import PaymentsList from './PaymentsList';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import FindTransactionPage from './FindTransactionPage';

export type PaymentsListProps = {
  serverUrl : string,
  initialPath: string[],
  onNavigate : (url : string) => void
}

export type MountReturnType = {
  onContainerNavigate : (newUrl: string) => void
}

const mount = (el: Element, props: PaymentsListProps) : MountReturnType => {

  const routes = [
    {path: "*", element:  <FindTransactionPage {...props} />},
  ];

  const router = createMemoryRouter(routes, {initialEntries: props.initialPath, initialIndex: 0});

  const root  = createRoot(el);

  root.render(
    <RouterProvider router={router} />);

    const mountReturn = (newUrl: string) => {
      router.navigate(newUrl, {replace:true})
    }

    return {onContainerNavigate : mountReturn};
}

export { mount };

