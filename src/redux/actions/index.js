import {
    ON_CHANGE_STEP_REGISTER,
    ENDING_STEP_REGISTER,
    ADD_NEW_USER_EMAIL_PASSWORD,
    ADD_NEW_DATA_USER
} from './actionsTypesUsers';

export const addUser = (data) => ({
    type: ADD_NEW_USER_EMAIL_PASSWORD,
    payload: {
        data
    }
});

export const addDataUser = (data) => ({
    type: ADD_NEW_DATA_USER,
    payload: {
        data
    }
});

export const onChangeStepRegister = (data) => ({
    type: ON_CHANGE_STEP_REGISTER,
    payload: {
        data
    }
});

export const completeStepRegister = (data) => ({
    type: ENDING_STEP_REGISTER,
    payload: {
        data
    }
})