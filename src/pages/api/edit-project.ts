import { EditProjectBody } from '@/db/models/Project';
import { DB } from '@/db/sequelize';
import { RESPONSES } from '@/utilities/constants';
import { handleCaughtAPIError } from '@/utilities/helpers';
import {
	validateRequestMethod,
	validNumericString
} from '@/utilities/validators';
import type { NextApiRequest, NextApiResponse } from 'next';

const editProject = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		validateRequestMethod('PATCH', req);
		const { id, nickname, path, categoryId } = req.body;
		const editProjectBody: EditProjectBody = {};
		if (!validNumericString(id)) {
			throw RESPONSES.models.project.invalidId;
		}
		if (nickname) {
			if (typeof nickname === 'string' && nickname.length) {
				editProjectBody.nickname = nickname;
			} else {
				throw RESPONSES.models.project.invalidNickname;
			}
		}
		if (path) {
			if (typeof path === 'string' && path.length) {
				editProjectBody.path = path;
			} else {
				throw RESPONSES.models.project.invalidPath;
			}
		}
		if (categoryId) {
			if (validNumericString(categoryId)) {
				editProjectBody.categoryId = Number(categoryId);
			} else {
				throw RESPONSES.models.project.invalidCategoryId;
			}
		}
		if (!Object.keys(editProjectBody).length) {
			throw RESPONSES.generic.emptyBody;
		}
		const sequelize = await DB.getConnection();
		if (!sequelize) {
			throw RESPONSES.generic.databaseConnectionError;
		}
		const { models } = sequelize;
		await models.Project.update(editProjectBody, {
			where: {
				id: Number(id)
			}
		});
		res.status(200);
	} catch (error) {
		handleCaughtAPIError(error, res);
	}
};

export default editProject;
