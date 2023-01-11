import { Fade } from '@mui/material';
import Modal from './Modal';

type AddProjectFormProps = {
	hideForm: () => void;
};

const AddProjectForm = (props: AddProjectFormProps) => {
	return (
		<Modal closeModal={props.hideForm}>
			<Fade in easing='ease-in-out' timeout={1000}>
				<h1>hello there</h1>
			</Fade>
		</Modal>
	);
};

export default AddProjectForm;
