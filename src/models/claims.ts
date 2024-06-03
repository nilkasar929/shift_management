import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config';
import Employee from './employee';

class Claim extends Model {
  public id!: string;
  public key!: string;
  public value!: string;
  public employeeId!: string;
}

Claim.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.UUID,
      references: {
        model: Employee,
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Claim',
  }
);

export default Claim;
