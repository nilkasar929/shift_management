import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import User from './User';

class Claim extends Model {
  public id!: string;
  public key!: string;
  public value!: string;
  public UserId!: string;
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
    UserId: {
      type: DataTypes.UUID,
      references: {
        model: User,
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
