import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../database';

interface IMetric {
  id: number;
  name: string;
  owner: number;
}

interface MetricCreationAttributes extends Optional<IMetric, 'id'> {}

interface MetricInstance
  extends Model<IMetric, MetricCreationAttributes>,
    IMetric {}

export const Metric = sequelize.define<MetricInstance>(
  'Metric',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    name: {
      type: DataTypes.STRING
    },
    owner: {
      type: DataTypes.INTEGER.UNSIGNED
    }
  },
  {
    tableName: 'metrics',
    createdAt: false,
    updatedAt: false
  }
);
