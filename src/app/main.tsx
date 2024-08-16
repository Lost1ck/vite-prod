import 'normalize.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import 'reset-css'
import { queryClient } from '../react-query-config'
import App from './App'
import './styles/index.module.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</StrictMode>
)
