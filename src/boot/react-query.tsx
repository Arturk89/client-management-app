import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

//@todo
const queryClientOptions = {
  defaultOptions: { queries: { staleTime: Infinity, refetchOnMount: false } },
};

const queryClient = new QueryClient(queryClientOptions);

export const ReactQuery = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}