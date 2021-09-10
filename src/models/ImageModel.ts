import { DataTypes, Model } from 'sequelize';
import { pgClient } from '../db';

interface IImageModel {
  id?: number,
  origin_file_name: string;
  genom: string;
  url: string;
}

const ImageModel = pgClient.define<Model<IImageModel>>('image', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  origin_file_name: DataTypes.STRING,
  genom: DataTypes.STRING,
  url: DataTypes.STRING
});

export {
  ImageModel
};
