import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Autocomplete from '../common/Autocomplete';
import InputLabel from '../common/InputLabel';
import InputRow from '../common/InputRow';
import Modal from '../common/Modal';
import Textbox from '../common/Textbox';

type AddProjectFormProps = {
	hideForm: () => void;
	showForm: boolean;
};

const schema = yup.object({
	ProjectPath: yup.string().required('Project path is required.'),
	Nickname: yup.string()
});

const defaultValues = {
	ProjectPath: '',
	Nickname: ''
};

type FormValues = typeof defaultValues;

const AddProjectForm = (props: AddProjectFormProps) => {
	const [category, setCategory] = useState('');

	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
		setValue
	} = useForm({
		defaultValues,
		resolver: yupResolver(schema)
	});

	useEffect(() => {
		if (!props.showForm) {
			reset();
		}
	}, [props.showForm, reset]);

	const onSubmit = (values: FormValues) => {
		console.log(values);
	};

	return (
		<Modal closeModal={props.hideForm} open={props.showForm}>
			<form onSubmit={handleSubmit(onSubmit)} className='w-[500px]'>
				<h1 className='text-2xl font-bold text-bright'>Add Project</h1>
				<InputRow>
					<InputLabel primaryText='Project Path' />
					<div className='flex'>
						<Textbox
							className='w-full'
							control={control}
							name={'ProjectPath'}
							errors={errors}
						/>
						<Button
							className='!ml-3 !h-full !bg-button_grey !pl-5 !pr-5 !text-bright hover:!bg-button_light_grey'
							onClick={async () => {
								const { path, dialog } = await import(
									'@tauri-apps/api'
								);
								const selected = await dialog.open({
									directory: true,
									multiple: false,
									defaultPath: await path.homeDir()
								});
								if (selected && typeof selected === 'string') {
									setValue('ProjectPath', selected);
								}
							}}
						>
							Browse
						</Button>
					</div>
				</InputRow>
				<InputRow>
					<InputLabel
						primaryText='Nickname'
						secondaryText='(Optional)'
					/>
					<Textbox
						control={control}
						name={'Nickname'}
						errors={errors}
					/>
				</InputRow>
				<InputRow>
					<InputLabel
						primaryText='Category'
						secondaryText='(Optional)'
					/>
					<Autocomplete
						value={category}
						onChange={(value) => {
							console.log(value);
							setCategory(value);
						}}
						options={[]}
					/>
				</InputRow>
			</form>
		</Modal>
	);
};

export default AddProjectForm;
