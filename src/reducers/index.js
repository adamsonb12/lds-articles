import { combineReducers } from 'redux';
import TileReducer from './TileReducer';
import ArticleReducer from './ArticleReducer';

export default combineReducers({
  tile: TileReducer,
  article: ArticleReducer
});
