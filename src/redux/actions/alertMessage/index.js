export const ALERT_MESSAGE = (payload) => {
    return async dispatch => {
        dispatch({
            type: 'ALERT_MESSAGE',
            payload
        })
    }
}
