import { Add, Settings } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import AddProjectForm from './forms/AddProjectForm';

const Header = () => {
	const [showAddProjectForm, setShowAddProjectForm] = useState(false);

	return (
		<>
			<div
				id='Header'
				className='flex h-12 w-full items-center justify-between bg-grey pl-2.5 font-bold'
			>
				<h1>Projects</h1>
				<div>
					<Tooltip title='Add Project'>
						<IconButton onClick={() => setShowAddProjectForm(true)}>
							<Add className='text-default hover:text-bright' />
						</IconButton>
					</Tooltip>
					<Tooltip title='Settings'>
						<IconButton className='pr-2.5'>
							<Settings className='text-default hover:text-bright' />
						</IconButton>
					</Tooltip>
				</div>
			</div>
			<AddProjectForm
				showForm={showAddProjectForm}
				hideForm={() => setShowAddProjectForm(false)}
			/>
		</>
	);
};

export default Header;
