import axios from "axios"
import { toast } from 'react-toastify';
import { styleToastify } from '../../../utility/styleToastify'

const baseUrl = process.env.REACT_APP_BASE_URL

const getHeaders = () => {
    return {
        "Authorization": `${localStorage.getItem("token")}`,
        'accept': 'application/json',
    }
}

export const GET_USER_BY_ADMIN = () => {
    let url = `${baseUrl}/users`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_USER_BY_ADMIN', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}
export const GET_CUSTOMER_LIST = () => {
    let url = `${baseUrl}/customer/master`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_CUSTOMER_LIST', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}
export const GET_MANUFACTURING_TEMPLATE_LIST = () => {
    let url = `${baseUrl}/manufacturing-template/product/formulation`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_MANUFACTURING_TEMPLATE_LIST', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}
export const GET_INGREDIENT_LIST = () => {
    let url = `${baseUrl}/ingredient/master`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_INGREDIENT_LIST', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}
export const GET_MATERIAL_LIST = () => {
    let url = `${baseUrl}/material/master`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_MATERIAL_LIST', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}
export const GET_PRODUCT_LIST = () => {
    let url = `${baseUrl}/product/master`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_PRODUCT_LIST', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}

export const GET_ORDER_LIST = () => {
    let url = `${baseUrl}/order/master`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_ORDER_LIST', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}

export const GET_PRODUCTION_GUIDELINES = () => {
    let url = `${baseUrl}/manufacturing-template/prod_proc_checklist`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_PRODUCTION_GUIDELINES', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}
export const GET_PRODUCTION_CHECKLIST = () => {
    let url = `${baseUrl}/manufacturing-template/prod_proc_guidelines`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_PRODUCTION_CHECKLIST', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}

export const GET_PRODUCTION_PROCESS_INGREDIENTS = () => {
    let url = `${baseUrl}/manufacturing-template/prod_proc_ingredients`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_PRODUCTION_PROCESS_INGREDIENTS', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}   

export const GET_PRODUCTION_PROCESS_STAGES = () => {
    let url = `${baseUrl}/manufacturing-template/prod_proc_stages`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_PRODUCTION_PROCESS_STAGES', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
} 
export const GET_PRODUCTION_PROCESS_MATERIAL = () => {
    let url = `${baseUrl}/manufacturing-template/prod_proc_materials`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_PRODUCTION_PROCESS_MATERIAL', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
} 

export const GET_PRODUCTION_PROCESS_INSPECTION = (prodprocId) => {
    let url = `${baseUrl}/manufacturing-template/prod_proc_inspection/${prodprocId}`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_PRODUCTION_PROCESS_INSPECTION', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
} 

export const GET_MASTER_DATA_LIST = () => {
    let url = `${baseUrl}/master_data`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_MASTER_DATA_LIST', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}

export const GET_PROCESS_MASTER_LIST = () => {
    let url = `${baseUrl}/manufacturing-template/process/master`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_PROCESS_MASTER_LIST', payload: res?.data?.data })
            } else {
                toast.info(res.data?.msg, styleToastify);
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}

export const UPDATE_CUSTOMER = (payload, Id) => {
    let url = `${baseUrl}/customer/master/${Id}`
    return async dispatch => {
        try {
            let res = await axios.put(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_CUSTOMER_LIST())
                return { status: 'success', msg: 'Customer Edited successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}
export const UPDATE_USER = (payload, Id) => {
    let url = `${baseUrl}/users/${Id}`
    return async dispatch => {
        try {
            let res = await axios.put(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_USER_BY_ADMIN())
                return { status: 'success', msg: 'User Edited successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}
export const UPDATE_PRODUCT = (payload, Id) => {
    let url = `${baseUrl}/product/master/${Id}`
    return async dispatch => {
        try {
            let res = await axios.put(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_PRODUCT_LIST())
                return { status: 'success', msg: 'Product Edited successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}
export const UPDATE_MATERIAL = (payload, Id) => {
    let url = `${baseUrl}/material/master/${Id}`
    return async dispatch => {
        try {
            let res = await axios.put(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_MATERIAL_LIST())
                return { status: 'success', msg: 'Material Edited successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}
export const UPDATE_ORDER = (payload, Id) => {
    let url = `${baseUrl}/order/master/${Id}`
    return async dispatch => {
        try {
            let res = await axios.put(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_ORDER_LIST())
                return (toast.success(('Order Edited successfully!').replace(/\\/g, ""), styleToastify))
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}
export const UPDATE_INGREDIENT = (payload, Id) => {
    let url = `${baseUrl}/ingredient/master/${Id}`
    return async dispatch => {
        try {
            let res = await axios.put(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_INGREDIENT_LIST())
                return { status: 'success', msg: 'Item Edited successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const FORMULATION_DATA = (info) => {
    // console.log(info)
    return async (dispatch) => {
        try {
            if (info) {
                dispatch({
                    type: "FORMULATION_DATA",
                    payload: info,
                });
            }
        } catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    };
};

export const ADD_PRODUCT_FORMULATION = (payload) => {
    // console.log(payload)
    let url = `${baseUrl}/manufacturing-template/product/formulation/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            // console.log(res)
            if (res?.data.success) {
                dispatch(FORMULATION_DATA(res?.data.data))
                dispatch(GET_MANUFACTURING_TEMPLATE_LIST())
                return { status: 'success', msg: 'Product Formulation Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_PRODUCTION_PROCESS = (payload) => {
    // console.log(payload)
    let url = `${baseUrl}/manufacturing-template/production/process/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            // console.log(res)
            if (res?.data.success) {
                dispatch(FORMULATION_DATA(res?.data.data))
                dispatch(GET_MANUFACTURING_TEMPLATE_LIST())
                return { status: 'success', msg: 'Product Processes Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_USER_BY_ADMIN = (payload) => {
    let url = `${baseUrl}/users/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_USER_BY_ADMIN())
                return { status: 'success', msg: 'User Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_CUSTOMER_ADMIN = (payload) => {
    let url = `${baseUrl}/customer/master/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_CUSTOMER_LIST())
                return { status: 'success', msg: 'Customer Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_PRODUCT_ADMIN = (payload) => {
    let url = `${baseUrl}/product/master/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_PRODUCT_LIST())
                return { status: 'success', msg: 'Product Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_INGREDIENT_ADMIN = (payload) => {
    let url = `${baseUrl}/ingredient/master/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_INGREDIENT_LIST())
                return { status: 'success', msg: 'Ingredient Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_MATERIAL_ADMIN = (payload) => {
    let url = `${baseUrl}/material/master/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_MATERIAL_LIST())
                return { status: 'success', msg: 'Material Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_ORDER_ADMIN = (payload) => {
    let url = `${baseUrl}/order/master/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            // console.log(res)
            if (res?.data.success) {
                dispatch(GET_ORDER_LIST())
                return { status: 'success', msg: 'Order Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_PRODUCTION_GUIDELINES = (payload) => {
    let url = `${baseUrl}/manufacturing-template/prod_proc_guidelines/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_PRODUCTION_GUIDELINES())
                return { status: 'success', msg: 'Guidelines Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_PRODUCTION_CHECKLIST = (payload) => {
    let url = `${baseUrl}/manufacturing-template/prod_proc_checklist/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_PRODUCTION_CHECKLIST())
                return { status: 'success', msg: 'Checklist Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_PRODUCTION_PROCESS_INGREGIENTS = (payload) => {
    let url = `${baseUrl}/manufacturing-template/prod_proc_ingredients/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_PRODUCTION_PROCESS_INGREDIENTS())
                return { status: 'success', msg: 'Ingredients Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_PRODUCTION_PROCESS_MATERIAL = (payload) => {
    let url = `${baseUrl}/manufacturing-template/prod_proc_materials/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            // console.log(res)
            if (res?.data.success) {
                dispatch(GET_PRODUCTION_PROCESS_MATERIAL())
                return { status: 'success', msg: 'Materials Selected successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}
export const ADD_PRODUCTION_PROCESS_STAGES = (payload) => {
    let url = `${baseUrl}/manufacturing-template/prod_proc_stages/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_PRODUCTION_PROCESS_STAGES())
                return { status: 'success', msg: 'Stages Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const ADD_PRODUCTION_PROCESS_INSPECTION = (payload,prod_proc_id) => {
    console.log(prod_proc_id)
    let url = `${baseUrl}/manufacturing-template/prod_proc_inspection/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            console.log(res)
            if (res?.data.success) {
                dispatch(GET_PRODUCTION_PROCESS_INSPECTION(prod_proc_id))
                return { status: 'success', msg: 'Stages Added successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const DELETE_MODULE_FROM_ADMIN = (type, deletepath) => {
    let url = `${baseUrl}${deletepath}`
    return async dispatch => {
        try {
            let res = await axios.delete(url, { headers: getHeaders() })
            if (res?.data.success) {
                if (type === 'user') {
                    // toast.success(res.data?.data, styleToastify);
                    await dispatch(GET_USER_BY_ADMIN())
                } else if (type === 'product') {
                    await dispatch(GET_PRODUCT_LIST())
                } else if (type === 'material') {
                    await dispatch(GET_MATERIAL_LIST())
                } else if (type === 'ingredient') {
                    await dispatch(GET_INGREDIENT_LIST())
                } else if (type === 'order') {
                    await dispatch(GET_ORDER_LIST())
                } else if (type === 'customer') {
                    await dispatch(GET_CUSTOMER_LIST())
                } else if (type === 'manufacturing') {
                    await dispatch(GET_MANUFACTURING_TEMPLATE_LIST())
                }
                return { status: 'success', msg: 'Item Deleted successfully!' }
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}