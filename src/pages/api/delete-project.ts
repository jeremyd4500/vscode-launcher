import { DB } from '@/db/sequelize';
import { RESPONSES } from '@/utilities/constants';
import { handleCaughtAPIError } from '@/utilities/helpers';
import {
	validateRequestMethod,
	validNumericString
} from '@/utilities/validators';
import type { NextApiRequest, NextApiResponse } from 'next';

const deleteProject = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		validateRequestMethod('DELETE', req);
		const { id } = req.body;
		if (!validNumericString(id)) {
			throw RESPONSES.models.project.invalidId;
		}
		const sequelize = await DB.getConnection();
		if (!sequelize) {
			throw RESPONSES.generic.databaseConnectionError;
		}
		const { models } = sequelize;
		await models.Project.destroy({
			where: {
				id: Number(id)
			}
		});
		res.status(200);
	} catch (error) {
		handleCaughtAPIError(error, res);
	}
};

export default deleteProject;
