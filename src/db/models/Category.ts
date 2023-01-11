import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

type CategoryAttributes = {
	id: number;
	name: string;
};

type CategoryOptionalAttributes = keyof Pick<CategoryAttributes, 'id'>;

type CategoryCreationAttributes = Optional<
	CategoryAttributes,
	CategoryOptionalAttributes
>;

export class Category
	extends Model<CategoryAttributes, CategoryCreationAttributes>
	implements CategoryAttributes
{
	id!: number;
	name!: string;

	static initModel(sequelize: Sequelize): typeof Category {
		return sequelize.define('Category', {
			id: {
				autoIncrement: true,
				type: DataTypes.BIGINT,
				allowNull: false,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING(99),
				allowNull: false,
				unique: true
			}
		}) as typeof Category;
	}
}
