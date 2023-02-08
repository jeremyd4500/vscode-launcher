import { Category } from '@/types/models/CategoryTypes';
import {
	Autocomplete as MuiAutocomplete,
	createFilterOptions,
	TextField
} from '@mui/material';

type FilterOptions = Omit<Category, 'id'> & {
	inputValue?: string;
};

type AutocompleteProps = {
	options: FilterOptions[];
	onChange: (newValue: string) => void;
	value: string;
};

const filter = createFilterOptions<FilterOptions>();

const Autocomplete = (props: AutocompleteProps) => {
	return (
		<MuiAutocomplete
			value={props.value}
			onChange={(event, newValue) => {
				if (typeof newValue === 'string') {
					props.onChange(newValue);
				} else if (newValue && newValue.inputValue) {
					// Create a new value from the user input
					props.onChange(newValue.inputValue);
				}
			}}
			filterOptions={(options, params) => {
				const filtered = filter(options, params);

				const { inputValue } = params;
				// Suggest the creation of a new value
				const isExisting = options.some(
					(option) => inputValue === option.name
				);
				if (inputValue !== '' && !isExisting) {
					filtered.push({
						inputValue,
						name: `Add "${inputValue}"`
					});
				}

				return filtered;
			}}
			selectOnFocus
			clearOnBlur
			handleHomeEndKeys
			options={props.options}
			getOptionLabel={(option) => {
				// Value selected with enter, right from the input
				if (typeof option === 'string') {
					return option;
				}
				// Add "xxx" option created dynamically
				if (option.inputValue) {
					return option.inputValue;
				}
				// Regular option
				return option.name;
			}}
			renderOption={(props, option) => <li {...props}>{option.name}</li>}
			sx={{ width: 300 }}
			freeSolo
			renderInput={(params) => (
				<TextField variant='standard' {...params} />
			)}
		/>
	);
};

export default Autocomplete;
