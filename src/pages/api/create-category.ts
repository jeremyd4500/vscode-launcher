import type { NextApiRequest, NextApiResponse } from 'next';
import { DB } from '../../db/sequelize';
import { RESPONSES } from '../../utilities/constants';
import { handleCaughtAPIError } from '../../utilities/helpers';
import { validateRequestMethod } from '../../utilities/validators';

const createCategory = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		validateRequestMethod('POST', req);
		const { name } = req.body;
		if (typeof name !== 'string' || !name.length) {
			throw RESPONSES.category.invalidCategoryName;
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
