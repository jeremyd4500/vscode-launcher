export const RESPONSES = {
	models: {
		category: {
			invalidId: {
				status: 400,
				message: '`body.id` is required and must be an integer.'
			},
			invalidName: {
				status: 400,
				message:
					'`body.name` is required and must be a non-empty string.'
			}
		},
		project: {
			invalidId: {
				status: 400,
				message: '`body.id` is required and must be an integer.'
			},
			invalidNickname: {
				status: 400,
				message: '`body.nickname` must be a non-empty string.'
			},
			invalidPath: {
				status: 400,
				message: '`body.path` must be a non-empty string.'
			},
			invalidPathRequired: {
				status: 400,
				message:
					'`body.path` is required and must be a non-empty string.'
			},
			invalidCategoryId: {
				status: 400,
				message: '`body.categoryId` must be an integer.'
			}
		}
	},
	generic: {
		emptyBody: {
			status: 400,
			message: 'The request body must not be empty.'
		},
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
