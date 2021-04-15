import {combineReducers} from 'redux';
import demoListReducer from '@uixkit.react/reducers/demoListReducer.js';
import demoListDetailReducer from '@uixkit.react/reducers/demoListDetailReducer.js';

export default combineReducers({
    listData: demoListReducer,
    listDetailData: demoListDetailReducer
});