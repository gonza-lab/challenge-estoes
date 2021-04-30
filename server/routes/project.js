const { Router } = require('express');
const project_controller = require('../controllers/project');
const project_schema = require('../joi/project');
const joi_validator = require('../middlewares/joiValidator');

const route = Router();

route.post(
  '/',
  joi_validator(project_schema.create, 'body'),
  project_controller.create
);
route.put(
  '/:id',
  joi_validator(project_schema.id, 'params'),
  joi_validator(project_schema.update, 'body'),
  project_controller.update
);
route.delete(
  '/:id',
  joi_validator(project_schema.id, 'params'),
  project_controller.delete
)
route.get(
  '/',
  project_controller.get
)
route.get(
  '/:id',
  joi_validator(project_schema.id, 'params'),
  project_controller.getById
)

module.exports = route;
