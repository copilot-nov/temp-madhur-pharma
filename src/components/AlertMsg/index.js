import React, { Fragment, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { connect } from "react-redux";
import { ALERT_MESSAGE } from '../../redux/actions/alertMessage'

const AlertInfo = ({ title, msg }) => {
    return (
        <div className="rounded bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-600 px-4 py-6 shadow-md" role="alert">
            <div className="flex">
                <div className="py-1"><svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                <div>
                    <p className="font-bold">{title}</p>
                    <p className="text-sm">{msg}</p>
                </div>
            </div>
        </div>
    )
}
const AlertWarning = ({ title, msg }) => {
    return (
        <div className="rounded bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 px-4 py-6 shadow-md" role="alert">
            <div className="flex">
                <div className="py-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg></div>
                <div>
                    <p className="font-bold">{title}</p>
                    <p className="text-sm">{msg}</p>
                </div>
            </div>
        </div>
    )
}
const AlertError = ({ title, msg }) => {
    return (
        <div className="rounded bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-6 shadow-md" role="alert">
            <div className="flex">
                <div className="py-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg></div>
                <div>
                    <p className="font-bold">{title}</p>
                    <p className="text-sm">{msg}</p>
                </div>
            </div>
        </div>
    )
}
const AlertSuccess = ({ title, msg }) => {
    return (
        <div className="rounded bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-6 shadow-md" role="alert">
            <div className="flex">
                <div className="py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <p className="font-bold">{title}</p>
                    <p className="text-sm">{msg}</p>
                </div>
            </div>
        </div>
    )
}

const AlertMsgComponent = ({ alertMessage, ALERT_MESSAGE }) => {
    
    function closeModal() {
        ALERT_MESSAGE({ open: false, title: '', message: '', alertType: '' })
    }
    useEffect(() => {
        console.log(alertMessage)
    }, [alertMessage])
    return (
        <>
            <Transition appear show={alertMessage?.open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    {alertMessage?.alertType === 'info' && <AlertInfo title={alertMessage?.title} msg={alertMessage?.message} />}
                                    {alertMessage?.alertType === 'warning' && <AlertWarning title={alertMessage?.title} msg={alertMessage?.message} />}
                                    {alertMessage?.alertType === 'error' && <AlertError title={alertMessage?.title} msg={alertMessage?.message} />}
                                    {alertMessage?.alertType === 'success' && <AlertSuccess title={alertMessage?.title} msg={alertMessage?.message} />}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        alertMessage: state?.AlertReducer?.alertMessage
    };
};
export default connect(mapStateToProps, { ALERT_MESSAGE })(AlertMsgComponent);
