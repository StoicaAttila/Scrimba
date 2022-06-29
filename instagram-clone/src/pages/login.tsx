import React, { useState, useEffect, useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import FirebaseContext from "../context/firebase"
import * as ROUTES from "../constants/routes"
import firebaseImp from 'firebase'

export default function Login(){
    const history = useHistory()

    const firebase = useContext(FirebaseContext)!

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = password === '' || emailAddress === ''
    
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            await firebaseImp.auth().signInWithEmailAndPassword(emailAddress, password)
            history.push(ROUTES.DASHBOARD)
        } catch (error) {
            setEmailAddress('')
            setPassword('')
            if(error instanceof Error){
                setError(error.message)
            }
        }
    }

    useEffect(() =>{
        document.title = 'Instagram Login'
    }, [])
    
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src={process.env.PUBLIC_URL + "/images/iphone-with-profile.jpg"} alt="iPhone with Instagram app"/>
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Instagram" className="mt-2 w-6/12 mb-4"/>
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
                    <form onSubmit={handleLogin} method="POST">
                        <input
                            aria-label="Enter email"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="text"
                            placeholder="Email"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <input
                            aria-label="Enter password"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange = {({ target }) => setPassword(target.value)}
                        />
                        <button
                            disabled={isInvalid}
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${isInvalid && 'cursor-not-allowed opacity-50'}`}
                        >
                            Login
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <Link to={ROUTES.SIGN_UP} className="font-bold">
                            Sign up
                        </Link>
                    </p>    
                </div>
            </div>
        </div>
    )
}