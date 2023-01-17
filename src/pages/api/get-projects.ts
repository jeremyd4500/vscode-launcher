import { DB } from '@/db/sequelize';
import { RESPONSES } from '@/utilities/constants';
import { handleCaughtAPIError } from '@/utilities/helpers';
import { validateRequestMethod } from '@/utilities/validators';
import type { NextApiRequest, NextApiResponse } from 'next';

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		validateRequestMethod('GET', req);
		const sequelize = await DB.getConnection();
		if (!sequelize) {
			throw RESPONSES.generic.databaseConnectionError;
		}
		const { models } = sequelize;
		const projects = await models.Project.findAll();
		res.status(200).send(projects);
	} catch (error) {
		handleCaughtAPIError(error, res);
	}
};

export default getProjects;
