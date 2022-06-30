import Joi from 'joi';

export const getSewelLevel = {
  query: Joi.object({
    gu: Joi.string().required(),
  })
};