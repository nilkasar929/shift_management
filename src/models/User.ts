import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';

class User extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public assignedShiftHours!: number;
  public role!: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assignedShiftHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user', 'teacher'),
      defaultValue: 'user',
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;
