import Joi from 'joi';

export const addCodeSchema = Joi.object({
  code: Joi.string().min(1).max(300).required(),
  owner: Joi.number().integer().min(1).required()
});
