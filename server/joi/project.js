const Joi = require('joi');

const id = Joi.object({
  id: Joi.string().required(),
});

const create = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  manager: Joi.string().required(),
  assignedTo: Joi.string().required(),
  status: Joi.boolean().required(),
});

const update = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  manager: Joi.string(),
  assignedTo: Joi.string(),
  status: Joi.boolean(),
}).or('name', 'description', 'manager', 'assignedTo', 'status');

module.exports = { id, create, update };
