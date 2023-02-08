import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@mui/material';
import { Control, Controller, FieldValue, FieldValues } from 'react-hook-form';

type TextboxProps<T extends FieldValues> = {
	control: Control<T>;
	className?: string;
	errors: any;
	name: FieldValue<T>;
};

const Textbox = <T extends FieldValues>(props: TextboxProps<T>) => (
	<Controller
		control={props.control}
		name={props.name}
		render={({ field }) => (
			<>
				<Input
					className={`!pl-3 !pr-3 !text-default ${props.className}`.trim()}
					error={props.errors[props.name] ? true : false}
					{...field}
				/>
				<ErrorMessage
					errors={props.errors}
					name={props.name}
					render={({ message }) => <p>{message}</p>}
				/>
			</>
		)}
	/>
);

export default Textbox;
