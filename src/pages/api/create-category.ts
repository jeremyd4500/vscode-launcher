import { CreateCategoryBody } from '@/db/models/Category';
import { DB } from '@/db/sequelize';
import { RESPONSES } from '@/utilities/constants';
import { handleCaughtAPIError } from '@/utilities/helpers';
import { validateRequestMethod } from '@/utilities/validators';
import type { NextApiRequest, NextApiResponse } from 'next';

const createCategory = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		validateRequestMethod('POST', req);
		const { name } = req.body;
		const createCategoryBody: CreateCategoryBody = {
			name: ''
		};
		if (typeof name !== 'string' || !name.length) {
			throw RESPONSES.models.category.invalidName;
		}
		createCategoryBody.name = name;
		if (!Object.keys(createCategoryBody).length) {
			throw RESPONSES.generic.emptyBody;
		}
		const sequelize = await DB.getConnection();
		if (!sequelize) {
			throw RESPONSES.generic.databaseConnectionError;
		}
		const { models } = sequelize;
		await models.Category.create({
			name
		});
		res.status(200);
	} catch (error) {
		handleCaughtAPIError(error, res);
	}
};

export default createCategory;
