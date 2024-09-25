import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import User from './User';

class Course extends Model {
  public id!: string;
  public name!:string;
  public image!:string;
  public description!: string;
  public domain!:string;
  public author!:string;

}

Course.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
   
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author:{
        type:DataTypes.STRING,
        allowNull:true
    },
    image:{
        type:DataTypes.STRING,
        allowNull:true
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true
    },
    price:{
      type:DataTypes.NUMBER,
      allowNull:true
    },
    domain: {
      type: DataTypes.ENUM('Web Development','Data Science','Cyber Security', 'Frontend', 'backend'),
      allowNull: false,
    },
    
  },
  {
    sequelize,
    modelName: 'course',
  }
);

export default Course;
