import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config';
import Employee from './employee';

class Shift extends Model {
  public id!: string;
  public employeeId!: string;
  public startTime!: Date;
  public endTime!: Date | null;
  public actualHours!: number;
}

Shift.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    employeeId: {
      type: DataTypes.UUID,
      references: {
        model: Employee,
        key: 'id',
      },
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    actualHours: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'Shift',
  }
);

export default Shift;
