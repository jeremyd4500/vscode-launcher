import { PropsWithChildren } from 'react';

const InputRow = (props: PropsWithChildren) => (
	<div className='mt-6'>{props.children}</div>
);

export default InputRow;
