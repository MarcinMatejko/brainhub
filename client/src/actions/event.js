import axios from 'axios';
import { ADD_EVENT, EVENT_ERROR } from './types';

export const addEvent = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/form', formData, config);

    dispatch({
      type: ADD_EVENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
