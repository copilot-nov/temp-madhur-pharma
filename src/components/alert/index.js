import { Fragment } from "react"


export const AlertSuccess = ({ msg }) => {
    return (
        <div className={`p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800`} role="alert">
            <span className="font-medium">Success !</span> {msg}
        </div>
    )
}


export const AlertError = ({ msg }) => {
    return (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <span className="font-medium">Error!</span>  {msg}
        </div>
    )
}


export const AlertInfo = ({ msg }) => {
    return (
        <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
            <span className="font-medium">Info !</span> {msg}
        </div>
    )
}

export const AlertWarning = ({ msg }) => {
    return (
        <div className="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
            <span className="font-medium">Warning !</span> {msg}
        </div>
    )
}

export const Alert = ({ type, msg }) => {
    return (
        <Fragment>
            {type === 'info' && <AlertInfo msg={msg} />}
            {type === 'success' && <AlertSuccess msg={msg} />}
            {type === 'error' && <AlertError msg={msg} />}
            {type === 'warning' && <AlertWarning msg={msg} />}

        </Fragment>
    )
}

