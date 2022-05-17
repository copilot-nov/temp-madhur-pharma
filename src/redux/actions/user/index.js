import axios from "axios"

const baseUrl = process.env.REACT_APP_BASE_URL

// const getHeaders = () => {
//     return {
//         "Authorization": `Bearer ${localStorage.getItem("token")}`,
//         "content-type": "application/json",
//     }
// }

export const LOGIN_USER = (payload) => {
    let url = `${baseUrl}/login`
    return async dispatch => {
        try {
            let res = await axios.post(url, payload)
            if (res?.data.success) {
                localStorage.setItem("token", res.data?.token)
                localStorage.setItem("userInfo", JSON.stringify(res.data?.data))
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
