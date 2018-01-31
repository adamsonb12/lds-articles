import { SELECT_PICTURE } from './Types';

export const selectPicture = (img) => {
  return {
    type: SELECT_PICTURE,
    payload: img
  };
};
