"use client";

import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
      },
    },
  }));

  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider
        attribute="class"
        disableTransitionOnChange
        defaultTheme="light"
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}
