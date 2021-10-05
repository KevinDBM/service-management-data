import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../database';

interface IUser {
  id: number;
  name: string;
}

interface UserCreationAttributes extends Optional<IUser, 'id'> {}

interface UserInstance extends Model<IUser, UserCreationAttributes>, IUser {}

export const User = sequelize.define<UserInstance>(
  'User',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    name: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'users',
    createdAt: false,
    updatedAt: false
  }
);
