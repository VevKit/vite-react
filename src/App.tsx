import { ModalManager } from '@/components/ui/react/Modal';
import ExamplePage from '@/pages/ExamplePage';

import { ToastContainer } from './components/ui/react/Toast';

const App = () => {
  return (
    <>
      <ExamplePage />
      <ModalManager />
      <ToastContainer position="top-right" />
    </>
  );
};

export default App;
