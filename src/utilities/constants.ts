export const RESPONSES = {
	category: {
		invalidCategoryId: {
			status: 400,
			message: '`body.id` is required and must be an integer.'
		},
		invalidCategoryName: {
			status: 400,
			message: '`body.name` is required and must be a non-empty string.'
		}
	},
	generic: {
		databaseConnectionError: {
			status: 500,
			message: 'Failed to Connect to the Database.'
		}
	},
	validation: {
		invalidRequestMethod: {
			status: 400,
			message: 'Request method "$" not allowed. Expected: "?"'
		}
	}
};
