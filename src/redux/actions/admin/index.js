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
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            toast.error((error.message).replace(/\\/g, ""), styleToastify);
        }
    }
}
// GET_MASTER_DATA_LIST

export const GET_ORDER_LIST = () => {
    let url = `${baseUrl}/order/master`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_ORDER_LIST', payload: res?.data?.data })
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