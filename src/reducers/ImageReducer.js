import articleData from './data/article.json';
import {
  SELECT_PICTURE
} from '../actions/Types';

const INITIAL_STATE = {
  selectedImage: articleData.images[0]
}

export default (state = INITIAL_STATE, action) => {
  console.log('Action here:', action);
  switch (action.type) {
    case SELECT_PICTURE:
      return { ...state, selectedImage: action.payload };
    default:
      return state;
  }
};
