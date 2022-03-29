import {CHANGE_GLOBAL_COLOR} from './types';

export default function reducer(state, action) {
  const {type, payload} = action;

  switch (type) {
    case CHANGE_GLOBAL_COLOR:
      return {
        ...state,
        globalColor: payload,
      };
  }
}
