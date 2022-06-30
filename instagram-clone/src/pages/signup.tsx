import { useHistory, Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import React, { useEffect, useState } from "react";
import firebase from 'firebase'
import { doesUsernameExist } from "../services/firebase";


export default function Signup() {
    const history = useHistory()
    
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = username === '' || fullName === '' || email === '' || password === ''

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const usernameExist = await doesUsernameExist(username);

        if(usernameExist && usernameExist.length === 0){
            try{
                const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(email,password)
                if(createdUserResult.user != null){
                    await createdUserResult.user.updateProfile({
                        displayName: username
                    })
                    await firebase.firestore().collection('user').add({
                        userId: createdUserResult.user.uid,
                        username: username.toLowerCase(),
                        fullName,
                        emailAddress: email.toLowerCase(),
                        following: [],
                        followers: [],
                        dateCreated: Date.now() 
                    })
                }
                history.push(ROUTES.DASHBOARD)
            } catch (error){
                if(error instanceof Error){
                    setError(error.message)
                }
            }
        } else{
            setUsername('')
            setFullName('')
            setEmail('')
            setPassword('')
            setError('That username is already taken!')
        } 
    }

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
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
                    <form onSubmit={handleSignUp} method="POST">
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