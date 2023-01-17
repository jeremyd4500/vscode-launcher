import { EditCategoryBody } from '@/db/models/Category';
import { DB } from '@/db/sequelize';
import { RESPONSES } from '@/utilities/constants';
import { handleCaughtAPIError } from '@/utilities/helpers';
import {
	validateRequestMethod,
	validNumericString
} from '@/utilities/validators';
import type { NextApiRequest, NextApiResponse } from 'next';

const editCategory = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		validateRequestMethod('PATCH', req);
		const { name, id } = req.body;
		const editCategoryBody: EditCategoryBody = {};
		if (!validNumericString(id)) {
			throw RESPONSES.models.category.invalidId;
		}
		if (name) {
			if (typeof name === 'string' && name.length) {
				editCategoryBody.name = name;
			} else {
				throw RESPONSES.models.category.invalidName;
			}
		}
		if (!Object.keys(editCategoryBody).length) {
			throw RESPONSES.generic.emptyBody;
		}
		const sequelize = await DB.getConnection();
		if (!sequelize) {
			throw RESPONSES.generic.databaseConnectionError;
		}
		const { models } = sequelize;
		await models.Category.update(editCategoryBody, {
			where: {
				id: Number(id)
			}
		});
		res.status(200);
	} catch (error) {
		handleCaughtAPIError(error, res);
	}
};

export default editCategory;
