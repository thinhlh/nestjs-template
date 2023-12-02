import * as Joi from "joi";

export enum EnvironmentType {
  DEV = "dev",
  PROD = "prod"
}

export interface Environment {
  NODE_ENV: EnvironmentType

  DATABASE_NAME: string
  DATABASE_USER: string
  DATABASE_PASSWORD: string
  DATABASE_PORT: number
  DATABASE_HOST: string
}

export const environmentSchema = Joi.object({

  NODE_ENV: Joi.valid(...Object.values(EnvironmentType)).default(EnvironmentType.DEV),

  DATABASE_NAME: Joi.string().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_PORT: Joi.number().required().min(0),
});
