import Header from '@/components/Header';
import { Project } from '@/db/models/Project';
import { PlayArrow } from '@mui/icons-material';
import { Fab } from '@mui/material';
import { useState } from 'react';

export default function Root() {
	const [projects, setProjects] = useState<Project[]>([]);

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
