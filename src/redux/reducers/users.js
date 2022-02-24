import {
    ON_CHANGE_STEP_REGISTER,
    ENDING_STEP_REGISTER,
    ADD_NEW_USER_EMAIL_PASSWORD,
    ADD_NEW_DATA_USER
} from "../actions/actionsTypesUsers";

// Changer l'état de la page d'un utilisateur l'ors d'une inscription
const initialBoolean = {
    onChange: false
}

export const stepRegister = (state = initialBoolean, action) => {

    switch (action.type) {

        case ON_CHANGE_STEP_REGISTER: 
            return {
                onChange: action.payload.data
            }
        default:
            return state
    }
};

// Changer l'état l'ors d'une fin inscription
const initialEndStepState = {
    endChange: false
}

export const endStepRegister = (state = initialEndStepState, action) => {

    switch (action.type) {

        case ENDING_STEP_REGISTER: 
            return {
                endChange: action.payload.data
            }
        default:
            return state
    }
};

// Ajouter un nouvel utilisateur Email + Password
const initialState = {
    userID: {}
};

export const users = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_USER_EMAIL_PASSWORD:
            return {
                userID: action.payload.data
            }

        default: 
            return state
    }
};

// Ajouter des données au nouvel utilisateur
const initialDataState = {
    dataID: {}
};

export const dataUsers = (state = initialDataState, action) => {

    switch (action.type) {

        case ADD_NEW_DATA_USER:
            return {
                dataID: action.payload.data
            }

        default: 
            return state
    }
};