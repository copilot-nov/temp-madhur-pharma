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

export const GET_PRODUCTION_BATCH_LIST = () => {
    let url = `${baseUrl}/production_batch`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_PRODUCTION_BATCH_LIST', payload: res?.data?.data })
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

export const GET_PRODUCTION_BATCH_BY_ID = async (production_batch_id) => {
    let url = `${baseUrl}/production_batch/${production_batch_id}`
    try {
        let res = await axios.get(url, { headers: getHeaders() })
        if (res?.data?.success) {
            return res?.data?.data[0]
        } else {
            toast.info(res.data?.msg, styleToastify);
            return false 
        }
    }
    catch (error) {
        toast.error((error.message).replace(/\\/g, ""), styleToastify);
    }
    
}

export const ADD_PRODUCTION_BATCH = (payload) => {
    let url = `${baseUrl}/production_batch/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_PRODUCTION_BATCH_LIST())
                toast.success(('Production Batch Added successfully!').replace(/\\/g, ""), styleToastify);
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}
export const UPDATE_PRODUCTION_BATCH = (payload, Id) => {
    let url = `${baseUrl}/production_batch/${Id}`
    return async dispatch => {
        try {
            let res = await axios.put(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_PRODUCTION_BATCH_LIST())
                return(toast.success(('Production Batch Added successfully!').replace(/\\/g, ""), styleToastify))
            } else {
                return { status: 'info', msg: res.data?.msg }
            }
        }
        catch (error) {
            return { status: 'error', msg: (error.message).replace(/\\/g, "") }
        }
    }
}

export const DELETE_MODULE_FROM_PRODUCTION_BATCH = (deletepath) => {
    let url = `${baseUrl}/production_batch/${deletepath}`
    return async dispatch => {
        try {
            let res = await axios.delete(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch(GET_PRODUCTION_BATCH_LIST())
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