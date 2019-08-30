export const types={
    FETCH_TESTE:"[TESTE] TESTE"
};

export const functionsActions=async ()=>{
    return {
        type: types.FETCH_TESTE,
        payload: {teste:"teste"}
    }
}