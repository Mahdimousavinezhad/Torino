import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function TanstakQueryProvider({ children }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstakQueryProvider;
