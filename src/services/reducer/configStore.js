import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from "redux-thunk"
import { AutReducer } from './LoginReducer';
import { ConfirmCodeReducer } from './ConfirmCodeReducer';
import { GetUserReducer } from './getUserReducer';
import { StaticReducer } from './staticReducer';
import { UpdateUserInfoReducer } from './UpdateUserInfoReducer';
import { GetMyOrderReducer } from './GetMyOrderReducer';

const rootReducer = combineReducers({
    login: AutReducer,
    confirmCode: ConfirmCodeReducer,
    getUser: GetUserReducer,
    static: StaticReducer,
    updateUser: UpdateUserInfoReducer,
    getMyOrder: GetMyOrderReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));
