import { ADD_EVENT, EVENT_ERROR } from '../actions/types';

const initialState = {
  events: [],
  event: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
        loading: false,
      };
    case EVENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
