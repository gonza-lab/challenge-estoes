const { Project } = require('../models');
const { NotFound } = require('../errors/errors');

const exists = async (id) => {
  let projectDB = await Project.findOne({ where: { id } });

  if (!projectDB) throw new NotFound();

  return projectDB;
};

const create = async (project) => {
  let projectDB = await Project.create(project);

  return projectDB.dataValues;
};

const update = async (project, id) => {
  let projectDB = await exists(id);

  await Project.update(project, { where: { id } });

  return (await exists(id)).dataValues;
};

const remove = async (id) => {
  let projectDB = await exists(id);

  await Project.destroy({ where: { id } });
};

const get = async () => await Project.findAll();

const getById = async (id) => (await exists(id)).dataValues;

module.exports = { create, update, delete: remove, get, getById };
