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
export const GET_CUSTOMER_BY_ADMIN = () => {
    let url = `${baseUrl}/customer/master`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_CUSTOMER_BY_ADMIN', payload: res?.data?.data })
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

export const ADD_USER_BY_ADMIN = (payload) => {
    let url = `${baseUrl}/users/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_USER_BY_ADMIN())
                toast.success(res.data?.data, styleToastify);
                return true
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
                toast.success(res.data?.data, styleToastify);
                return true
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