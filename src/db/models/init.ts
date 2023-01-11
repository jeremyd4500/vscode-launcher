import type { Sequelize } from 'sequelize';
import { Category as _Category } from './Category';
import { Project as _Project } from './Project';

export const initModels = (sequelize: Sequelize) => {
	const Category = _Category.initModel(sequelize);
	const Project = _Project.initModel(sequelize);

	return {
		Category: Category,
		Project: Project
	};
};
