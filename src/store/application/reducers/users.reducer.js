import {types} from '../actions/users.action';

const INITIAL_STATE = {
    users: null
};

export function reducerUsers(state = INITIAL_STATE, action){
    switch(action.type){
        case types.GET_USER:
            return  {...state, users:action.payload};
        default:
            return state;
    }
}