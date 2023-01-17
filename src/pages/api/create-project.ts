import { CreateProjectBody } from '@/db/models/Project';
import { DB } from '@/db/sequelize';
import { RESPONSES } from '@/utilities/constants';
import { handleCaughtAPIError } from '@/utilities/helpers';
import {
	validateRequestMethod,
	validNumericString
} from '@/utilities/validators';
import type { NextApiRequest, NextApiResponse } from 'next';

const createProject = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		validateRequestMethod('POST', req);
		const { nickname, path, categoryId } = req.body;
		const createProjectBody: CreateProjectBody = {
			path: ''
		};
		if (typeof path !== 'string' || !path.length) {
			throw RESPONSES.models.project.invalidPathRequired;
		}
		createProjectBody.path = path;
		if (nickname) {
			if (typeof nickname === 'string' && nickname.length) {
				createProjectBody.nickname = nickname;
			} else {
				throw RESPONSES.models.project.invalidNickname;
			}
		}
		if (categoryId) {
			if (validNumericString(categoryId)) {
				createProjectBody.categoryId = Number(categoryId);
			} else {
				throw RESPONSES.models.project.invalidCategoryId;
			}
		}
		const sequelize = await DB.getConnection();
		if (!sequelize) {
			throw RESPONSES.generic.databaseConnectionError;
		}
		const { models } = sequelize;
		await models.Project.create(createProjectBody);
		res.status(200);
	} catch (error) {
		handleCaughtAPIError(error, res);
	}
};

export default createProject;
