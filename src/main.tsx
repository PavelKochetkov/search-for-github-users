import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css';
import init from './init';

const queryClient = new QueryClient();

const run = async (): Promise<void> => {
  const root = createRoot(document.getElementById('root')!);
  const app = await init();
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        {app}
      </QueryClientProvider>
    </StrictMode>,
  );
};

run();
