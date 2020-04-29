import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
  CHANGE_FIELD,
  ({form, key, value}) => ({
    form,
    key,
    value,
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  }
};

// const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';
// export const sampleAction = createAction(SAMPLE_ACTION);
// const initialState = {};

const auth = handleActions(
  {
    // [SAMPLE_ACTION]: (state, action) => state,
    [CHANGE_FIELD]: (state, {payload: {form, key, value}}) => 
      produce(state, draft => {
        draft[form][key] = value;
      }),
      [INITIALIZE_FORM]: (state, { payload: form}) => ({
        ...state,
        [form]: initialState[form],
      }),
  },
  initialState,
);

export default auth;