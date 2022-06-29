import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import React, {useContext, useEffect, useState} from "react";

export default function Signup() {
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = username === '' || fullName === '' || email === '' || password === ''

    useEffect(() =>{
        document.title = 'Instagram SignUp'
    }, [])

    return (
        <div className="container flex mx-auto max-w-xs items-center h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Instagram" className="mt-2 w-6/12 mb-4"/>
                    </h1>

                    <form method="POST">
                        <input
                            aria-label="Enter your username"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={({ target }) => setUsername(target.value.toLowerCase())}
                        />
                        <input
                            aria-label="Enter your full name"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder="Full name"
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)}
                        />
                        <input
                            aria-label="Enter your email"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <button
                            disabled={isInvalid}
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${isInvalid && 'cursor-not-allowed opacity-50'}`}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Have an account?{` `}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}