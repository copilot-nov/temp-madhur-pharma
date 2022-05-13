import React from 'react';

const FormAdd = (props) => {
    const { closeModal } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        closeModal()
    }

    return (
        <div className="md:col-span-2">
            <form onSubmit={handleSubmit} action="#" method="POST">
                <div className="overflow-hidden">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <div className='w-full flex justify-start items-center'>
                                    <p className="block text-sm font-medium text-gray-900 mr-4">
                                        XXXX
                                    </p>
                                    <input
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <div className='w-full flex justify-start items-center'>
                                    <p className="block text-sm font-medium text-gray-900 mr-4">
                                        XXXX
                                    </p>
                                    <input
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <div className='w-full flex justify-start items-center'>
                                    <p className="block text-sm font-medium text-gray-900 mr-4">
                                        XXXX
                                    </p>
                                    <input
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <div className='w-full flex justify-start items-center'>
                                    <p className="block text-sm font-medium text-gray-900 mr-4">
                                        XXXX
                                    </p>
                                    <input
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                    />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                                <div className='w-full flex justify-start items-start'>
                                    <p className="block text-sm font-medium text-gray-900 mr-4">
                                        XXXX
                                    </p>
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={8}
                                        className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-900"
                                        // placeholder="you@example.com"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            onClick={closeModal}
                            className="mr-2 inline-flex justify-center py-2 px-8 border border-green-900 shadow-sm text-sm font-medium text-green-900 bg-white hover:bg-green-100 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormAdd;
