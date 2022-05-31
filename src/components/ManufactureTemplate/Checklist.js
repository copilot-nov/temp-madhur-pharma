
import { useState } from "react";

const Checklist = (prosp) => {
    const [inputTime, setInputTime] = useState(1)


    return (
        <div className="p-4">
            {
                new Array(inputTime).fill(inputTime + 'id')?.map((item, i) => {
                    return (
                        <div key={i} className="flex justify-between items-center">
                            <div className='w-full items-center'>
                                <p className="block text-sm font-medium text-gray-900">
                                    Enter Checklist
                                </p>
                                <input
                                    required
                                    name='capacity'
                                    className="w-full focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2 py-1"
                                />
                            </div>
                            <div className="ml-6 flex justify-end">
                                <button onClick={() => { setInputTime(inputTime + 1) }} className="flex justify-center items-center mt-4 text-white rounded-full h-8 w-8 bg-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                                <button onClick={() => { setInputTime(inputTime - 1) }} className="flex justify-center items-center ml-4 mt-4 text-white rounded-full h-8 w-8 bg-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Checklist;
