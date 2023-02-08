import { PlayArrow } from '@mui/icons-material';
import { Fab } from '@mui/material';
import Header from './Header';

const App = () => {
	return (
		<>
			<Header />
			<Fab
				variant='extended'
				className='!absolute !right-5 !bottom-5 !bg-white'
			>
				<PlayArrow className='mr-2' />
				Launch VS Code
			</Fab>
		</>
	);
};

export default App;
