import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import User from './User';
import Course from './course';

class Favourites extends Model {
  public id!: string;
  public courseId!: string;
  public UserId!: string;
}

Favourites.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    courseId:{
        type: DataTypes.UUID,
        references:{
            model:Course,
            key:'id'
        }
    },
    userId: {
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
    modelName: 'favourites',
  }
);

export default Favourites;
