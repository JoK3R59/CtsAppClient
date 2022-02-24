import { combineReducers } from "redux";

import { stepRegister, endStepRegister, users, dataUsers } from "./users";

export const rootReducer = combineReducers({
    stepRegister,
    endStepRegister,
    users,
    dataUsers
});