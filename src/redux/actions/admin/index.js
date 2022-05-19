import axios from "axios"

const baseUrl = process.env.REACT_APP_BASE_URL

const getHeaders = () => {
    return {
        "Authorization": `${localStorage.getItem("token")}`,
        'accept': 'application/json',
    }
}
const getUsetInfo = () => {
    return JSON.parse(localStorage.getItem('userInfo'))
    // return JSON.pase(localStorage.getItem('userInfo'))
}

// console.log(getUsetInfo())


export const GET_USER_BY_ADMIN = () => {
    let url = `${baseUrl}/users`
    return async dispatch => {
        try {
            console.log(getHeaders())

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