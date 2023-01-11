import type { NextApiRequest, NextApiResponse } from 'next';
import { DB } from '../../db/sequelize';
import { RESPONSES } from '../../utilities/constants';
import { handleCaughtAPIError } from '../../utilities/helpers';
import { validateRequestMethod } from '../../utilities/validators';

const getCategories = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		validateRequestMethod('GET', req);
		const sequelize = await DB.getConnection();
		if (!sequelize) {
			throw RESPONSES.generic.databaseConnectionError;
		}
		const { models } = sequelize;
		const categories = await models.Category.findAll();
		res.status(200).send(categories);
	} catch (error) {
		handleCaughtAPIError(error, res);
	}
};

export default getCategories;
