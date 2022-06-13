const initialState = {
    // allTask: null,
    usermanagmentList: [],
    CustomerManagmentList: [],
    ingredientList: [],
    materialList: [],
    productList: [],
    orderList: [],
    manufacturingTemplateList: [],
    masterDataList: [],
    processMaster: [],
}
export const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_BY_ADMIN":
            return { ...state, usermanagmentList: action.payload };
        case "GET_CUSTOMER_LIST":
            return { ...state, CustomerManagmentList: action.payload };
        case "GET_INGREDIENT_LIST":
            return { ...state, ingredientList: action.payload };
        case "GET_MATERIAL_LIST":
            return { ...state, materialList: action.payload };
        case "GET_MANUFACTURING_TEMPLATE_LIST":
            return { ...state, manufacturingTemplateList: action.payload };
        case "GET_PRODUCT_LIST":
            return { ...state, productList: action.payload };
        case "GET_ORDER_LIST":
            return { ...state, orderList: action.payload };
        case "GET_PROCESS_MASTER_LIST":
            return { ...state, processMaster: action.payload };
        case "GET_MASTER_DATA_LIST":
            return { ...state, masterDataList: action.payload };
        default: return state
            break

    }
}