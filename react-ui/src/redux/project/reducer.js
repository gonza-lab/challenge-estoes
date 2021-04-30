import types from '../types';

const initialState = {
  list: [],
  errorMsg: '',
  succesMsg: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.projectCreate:
      return { ...state, list: [payload, ...state.list] };

    case types.projectUpdate:
      return {
        ...state,
        list: state.list.reduce(
          (acum, curr) =>
            curr.id === payload.id ? [...acum, payload] : [...acum, curr],
          []
        ),
      };

    case types.projectDelete:
      return {
        ...state,
        list: state.list.reduce(
          (acum, curr) => (curr.id === payload.id ? acum : [...acum, curr]),
          []
        ),
      };

    case types.projectReadAll:
      return {
        ...state,
        list: payload,
      };

    case types.projectSetErrorMsg: 
      return {
	...state, 
	errorMsg: payload
      }
    case types.projectSetSuccesMsg: 
      return {
	...state, 
	succesMsg: payload
      }

    default:
      return state;
  }
};

export default reducer;
