import types from '../types';
import axios from 'axios';

const add = (project) => ({
  type: types.projectCreate,
  payload: project,
});

const update = (payload) => ({
  type: types.projectUpdate,
  payload,
});

const remove = (payload) => ({ type: types.projectDelete, payload });

const readAll = (payload) => ({ type: types.projectReadAll, payload });

const setSuccesMsg = (payload) => ({
  type: types.projectSetSuccesMsg,
  payload,
});

const setErrorMsg = (payload) => ({
  type: types.projectSetErrorMsg,
  payload,
});

const startAdd = (project, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/api/project', project);
      dispatch(add(res.data.data));
      dispatch(setSuccesMsg('Project created successfully'));
      history.push('/');
    } catch (error) {
      dispatch(
        setErrorMsg('The project could not be created, please try again.')
      );
    }
  };
};

const startRemove = (project) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/project/${project.id}`);
      dispatch(remove(project));
    } catch (error) {
      dispatch(
        setErrorMsg('The project could not be created, please try again.')
      );
    }
  };
};

const startUpdate = (id, project, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/api/project/${id}`, project);
      dispatch(update(res.data.data));
      history.push('/');
    } catch (error) {
      dispatch(
        setErrorMsg('The project could not be created, please try again.')
      );
    }
  };
};

const startReadAll = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/project');
      dispatch(readAll(res.data.data));
    } catch (error) {}
  };
};

export default {
  startAdd,
  setErrorMsg,
  startReadAll,
  startRemove,
  startUpdate,
};
