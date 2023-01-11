import { Add, Settings } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import AddProjectForm from './AddProjectForm';

const Header = () => {
	const [showAddProjectForm, setShowAddProjectForm] = useState(false);

	return (
		<>
			<div
				id='Header'
				className='flex h-12 w-full items-center justify-between bg-one_dark_grey pl-2.5 pr-2.5 font-bold'
			>
				<h1>Projects</h1>
				<div>
					<Tooltip title='Add Project'>
						<IconButton onClick={() => setShowAddProjectForm(true)}>
							<Add className='text-one_dark_text hover:text-[#FFFFFF]' />
						</IconButton>
					</Tooltip>
					<Tooltip title='Settings'>
						<IconButton>
							<Settings className='text-one_dark_text hover:text-[#FFFFFF]' />
						</IconButton>
					</Tooltip>
				</div>
			</div>
			{showAddProjectForm && (
				<AddProjectForm hideForm={() => setShowAddProjectForm(false)} />
			)}
		</>
	);
};

export default Header;
