import { PlayArrow } from '@mui/icons-material';
import { Fab } from '@mui/material';
import Header from '../components/Header';

export default function Root() {
	return (
		<>
			<Header />
			<Fab
				variant='extended'
				className='absolute right-5 bottom-5 bg-[#FFFFFF]'
			>
				<PlayArrow sx={{ mr: 1 }} />
				LAUNCH VS CODE
			</Fab>
		</>
	);
}
