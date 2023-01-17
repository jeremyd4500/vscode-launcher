import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

type ProjectAttributes = {
	id: number;
	nickname: string;
	path: string;
	categoryId: number;
};

type ProjectOptionalAttributes = keyof Pick<
	ProjectAttributes,
	'id' | 'nickname' | 'categoryId'
>;

type ProjectCreationAttributes = Optional<
	ProjectAttributes,
	ProjectOptionalAttributes
>;

export type CreateProjectBody = {
	nickname?: string;
	path: string;
	categoryId?: number;
};

export type EditProjectBody = {
	nickname?: string;
	path?: string;
	categoryId?: number;
};

export class Project
	extends Model<ProjectAttributes, ProjectCreationAttributes>
	implements ProjectAttributes
{
	id!: number;
	nickname!: string;
	path!: string;
	categoryId!: number;

	static initModel(sequelize: Sequelize): typeof Project {
		return sequelize.define('Project', {
			id: {
				autoIncrement: true,
				type: DataTypes.BIGINT,
				allowNull: false,
				primaryKey: true
			},
			nickname: {
				type: DataTypes.STRING(99),
				allowNull: true
			},
			path: {
				type: DataTypes.STRING(99),
				allowNull: false,
				unique: true
			},
			categoryId: {
				type: DataTypes.BIGINT,
				allowNull: true,
				references: {
					model: 'Category',
					key: 'id'
				}
			}
		}) as typeof Project;
	}
}
