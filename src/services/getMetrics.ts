import { Metric } from '../models/Metric';

export const getMetrics = async (owner: number) => {
  try {
    const metrics = await Metric.findAll({ where: { owner } });

    return metrics;
  } catch (error) {
    throw error;
  }
};
