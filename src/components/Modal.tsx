import { PropsWithChildren } from 'react';

type ModalProps = {
	closeModal: () => void;
};

const Modal = (props: PropsWithChildren<ModalProps>) => (
	<>
		<div className='absolute top-0 left-0 flex h-full w-full items-center justify-center'>
			<div
				className='z-[3000] bg-[#FFFFFF] p-10'
				style={{
					boxShadow: 'black 0 0 20px 0px'
				}}
			>
				{props.children}
			</div>
		</div>
		<div
			className='absolute top-0 left-0 z-[2000] h-full w-full bg-[#000000] bg-opacity-20'
			onClick={() => props.closeModal()}
		/>
	</>
);

export default Modal;
