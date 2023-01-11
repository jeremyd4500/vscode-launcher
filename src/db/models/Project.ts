import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

type ProjectAttributes = {
	id: number;
	path: string;
	categoryId: string;
};

type ProjectOptionalAttributes = keyof Pick<
	ProjectAttributes,
	'id' | 'categoryId'
>;

type ProjectCreationAttributes = Optional<
	ProjectAttributes,
	ProjectOptionalAttributes
>;

export class Project
	extends Model<ProjectAttributes, ProjectCreationAttributes>
	implements ProjectAttributes
{
	id!: number;
	path!: string;
	categoryId!: string;

	static initModel(sequelize: Sequelize): typeof Project {
		return sequelize.define('Project', {
			id: {
				autoIncrement: true,
				type: DataTypes.BIGINT,
				allowNull: false,
				primaryKey: true
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
