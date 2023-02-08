type InputLabelProps = {
	primaryText: string;
	secondaryText?: string;
};

const InputLabel = (props: InputLabelProps) => (
	<div className='mb-1 flex'>
		<h3 className='text-bright'>{props.primaryText}</h3>
		{props.secondaryText && <p>&nbsp;{props.secondaryText}</p>}
	</div>
);

export default InputLabel;
