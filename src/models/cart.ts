import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import User from './User';
import Course from './course';

class Cart extends Model {
  public id!: string;
  public userId!: string;
  public courseId!:string;
}

Cart.init(
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
    modelName: 'cart',
  }
);

export default Cart;
