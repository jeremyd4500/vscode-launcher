import type { NextApiRequest, NextApiResponse } from 'next';
import { DB } from '../../db/sequelize';
import { RESPONSES } from '../../utilities/constants';
import { handleCaughtAPIError } from '../../utilities/helpers';
import {
	validateRequestMethod,
	validNumericString
} from '../../utilities/validators';

const deleteCategory = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		validateRequestMethod('POST', req);
		const { id } = req.body;
		if (!validNumericString(id)) {
			throw RESPONSES.category.invalidCategoryId;
		}
		const sequelize = await DB.getConnection();
		if (!sequelize) {
			throw RESPONSES.generic.databaseConnectionError;
		}
		const { models } = sequelize;
		await models.Category.destroy({
			where: {
				id: Number(id)
			}
		});
		res.status(200);
	} catch (error) {
		handleCaughtAPIError(error, res);
	}
};

export default deleteCategory;
