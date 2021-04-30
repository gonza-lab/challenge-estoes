const { response, request } = require('express');
const project_service = require('../services/project');

const create = async (req = request, res = response, next) => {
  try {
    let data = await project_service.create(req.body);

    res.status(201).json({ ok: true, data });
  } catch (error) {
    next(error);
  }
};

const update = async (req = request, res = response, next) => {
  try {
    let data = await project_service.update(req.body, req.params.id);

    res.status(200).json({ ok: true, data });
  } catch (error) {
    next(error);
  }
};

const remove = async (req = request, res = response, next) => {
  try {
    let data = await project_service.delete(req.params.id);

    res.status(200).json({ ok: true });
  } catch (error) {
    next(error);
  }
};

const get = async (req = request, res = response, next) => {
  try {
    let data = await project_service.get();

    res.status(200).json({ ok: true, data });
  } catch(error) {
    console.log(error);
    next(error);
  }
}

const getById = async (req = request, res = response, next) => {
  try {
    let data = await project_service.getById(req.params.id);

    res.status(200).json({ ok: true, data });
  } catch(error) {
    next(error);
  }
}

module.exports = { create, update, delete: remove, get, getById };
