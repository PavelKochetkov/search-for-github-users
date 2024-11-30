import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import init from './init';

const run = async (): Promise<void> => {
  const root = createRoot(document.getElementById('root')!);
  const app = await init();
  root.render(
    <StrictMode>
      {app}
    </StrictMode>,
  );
};

run();
