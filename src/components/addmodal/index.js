import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import MainFormAdd from '../formAdd'

export default function AddModal(props) {
    const { classes, btnTitle, titleModal } = props
    let [isOpen, setIsOpen] = useState(false)
    const [handleResponse, setHandleResponse] = useState(null)
    
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
        setHandleResponse(null)
    }

    return (
        <>
            <button onClick={openModal} className={classes}>
                {btnTitle}
            </button>

            <Transition appear show={isOpen} as={Fragment}>
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
                                <Dialog.Panel className="lg:w-xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="mx-1 border-b border-gray-900 text-lg font-medium text-green-900 sm:px-6 px-2 py-2"
                                    >
                                        {titleModal}
                                    </Dialog.Title>
                                    <div className='p-2'>
                                        <div className="sm:mt-2 mt-4">
                                            <MainFormAdd
                                                handleResponse={handleResponse}
                                                setHandleResponse={setHandleResponse}
                                                titleModal={titleModal}
                                                closeModal={closeModal} />
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
