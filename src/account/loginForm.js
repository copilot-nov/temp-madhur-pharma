import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const LoginForm = ({ LOGIN_USER }) => {
    const [payload, setPayload] = useState({})
    const history = useNavigate()

    // const routehistory = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await LOGIN_USER(payload)
        if (res) {
            history('/production')
        }
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <form onSubmit={handleSubmit}>

                    {/* <div className="rounded-2xl border hover:shadow p-10"> */}
                    <div className="flex flex-col items-center space-y-4">
                        <div>
                            <div className='flex items-end'>
                                <img src={'./logo.png'} alt='logo' className='w-14' />
                                <h1 className='text-xl text-gray-600'>Madhur Pharma {`&`} </h1>
                            </div>
                            <div className='flex justify-start'>
                                <h1 className='text-xl text-gray-600'>Reseach Laboratories</h1>
                                <span className='ml-1 text-gray-600'><small>(P) Ltd</small></span>
                            </div>
                        </div>
                        <h2 className="text-2xl text-green-800 text-center">
                            Production console
                        </h2>

                        <input
                            // required
                            onChange={(e) => { setPayload({ ...payload, email: e.target.value }) }}
                            // name='email'
                            type="text"
                            placeholder="Email ID"
                            className="placeholder:font-bold placeholder:text-gray-900 border border-gray-700 w-full h-10 px-2 py-1"
                        />
                        <input
                            // required
                            onChange={(e) => { setPayload({ ...payload, password: e.target.value }) }}
                            type="password"
                            placeholder="Password"
                            name="Password"
                            className="placeholder:font-bold placeholder:text-gray-900 border border-gray-700 w-full h-10 px-2 py-1"
                        />
                        <button
                            type='submit'
                            className="bg-green-900 text-white hover:bg-green-700 font-semibold px-2 py-2 w-1/3"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;