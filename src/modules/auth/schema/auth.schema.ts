import Joi from 'joi';

export const AuthSchema = {
  login: Joi.object({
    username: Joi.string().required().max(3),
    password: Joi.string().required(),
  }),
};
