import axios from "axios"

const baseUrl = process.env.REACT_APP_BASE_URL

const getHeaders = () => {
    return {
        "Authorization": `${localStorage.getItem("token")}`,
        'accept': 'application/json',
    }
}
// const getUsetInfo = () => {
//     return JSON.parse(localStorage.getItem('userInfo'))
//     // return JSON.pase(localStorage.getItem('userInfo'))
// }

// console.log(getUsetInfo())


export const GET_USER_BY_ADMIN = () => {
    let url = `${baseUrl}/users`
    return async dispatch => {
        try {
            let res = await axios.get(url, { headers: getHeaders() })
            if (res?.data.success) {
                dispatch({ type: 'GET_USER_BY_ADMIN', payload: res?.data?.data })
            } else {
                alert(res.data?.msg)
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
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
                alert(res.data?.msg)
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
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
                alert(res.data?.msg)
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
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
                alert(res.data?.msg)
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
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
                alert(res.data?.msg)
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
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
                alert(res.data?.msg)
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
        }
    }
}

export const ADD_USER_BY_ADMIN = (payload) => {
    let url = `${baseUrl}/users/create`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload, { headers: getHeaders() })
            if (res?.data.success) {
                GET_USER_BY_ADMIN()
                return true
            } else {
                alert(res.data?.msg)
                return false //{ open: true, title: 'Password !', message: res.data?.msg, alertType: 'error' }
            }
        }
        catch (error) {
            console.log((error.message).replace(/\\/g, ""))
        }
    }
}