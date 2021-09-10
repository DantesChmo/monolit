import { DataTypes, Model } from 'sequelize';
import { pgClient } from '../db';

interface IUserModel {
  id?: number;
  first_name: string;
  last_name: string;
  age: number;
}

const UserModel = pgClient.define<Model<IUserModel>>('user', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  age: DataTypes.NUMBER
});

export {
  UserModel
};
