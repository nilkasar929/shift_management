import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config';
import Employee from './employee';
import Shift from './shift';

class Timesheet extends Model {
  public id!: string;
  public employeeId!: string;
  public shiftId!: string;
  public projectName!: string;
  public taskName!: string;
  public fromDate!: Date;
  public toDate!: Date;
}

Timesheet.init(
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
    shiftId: {
      type: DataTypes.UUID,
      references: {
        model: Shift,
        key: 'id',
      },
      allowNull: false,
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fromDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    toDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Timesheet',
  }
);

export default Timesheet;
