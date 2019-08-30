import {types} from './actions';

const INITIAL_STATE={
    data:{teste:"testePadrao"}
};

export function reducerTeste(state = INITIAL_STATE, action){
    switch(action.type){
        case types.FETCH_TESTE:
            return  {...state, data:action.payload};
        default:
            return state;
    }
}