import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GithubProvider } from './contexts/GithubContext'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <GithubProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </GithubProvider>
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
