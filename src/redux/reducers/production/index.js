const initialState = {
    // allTask: null,
    productionBatchList: [],
   
}
export const ProductionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTION_BATCH_LIST":
            return { ...state, productionBatchList: action.payload };
        default: return state
            break

    }
}