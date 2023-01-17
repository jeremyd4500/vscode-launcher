import { Backdrop, Fade, Modal as MuiModal } from '@mui/material';
import { PropsWithChildren } from 'react';
import FocusLock from 'react-focus-lock';

type ModalProps = {
	closeModal: () => void;
	open: boolean;
};

const Modal = (props: PropsWithChildren<ModalProps>) => (
	<MuiModal
		aria-labelledby='AddProjectForm'
		open={props.open}
		onClose={props.closeModal}
		closeAfterTransition
		slots={{
			backdrop: Backdrop
		}}
		slotProps={{
			backdrop: {
				timeout: 500
			}
		}}
	>
		<Fade in={props.open}>
			<div
				className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] border-2 border-solid border-border bg-grey p-8'
				style={{
					boxShadow:
						'0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
				}}
			>
				<FocusLock>{props.children}</FocusLock>
			</div>
		</Fade>
	</MuiModal>
);

export default Modal;
