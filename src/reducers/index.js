import { combineReducers } from 'redux';
import TileReducer from './TileReducer';
import ArticleReducer from './ArticleReducer';
import ImageReducer from './ImageReducer';

export default combineReducers({
  tile: TileReducer,
  article: ArticleReducer,
  image: ImageReducer
});
