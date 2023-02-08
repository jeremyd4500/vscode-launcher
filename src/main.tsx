import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<SnackbarProvider
			maxSnack={4}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
		>
			<App />
		</SnackbarProvider>
	</React.StrictMode>
);
