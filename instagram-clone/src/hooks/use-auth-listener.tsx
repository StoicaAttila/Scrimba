import {useState, useEffect, useContext} from 'react'
import FirebaseContext from '../context/firebase'
import firebase from 'firebase'

export default function useAuthListener(){
    const temp = localStorage.getItem('authUser')
    const [user, setUser] = useState<firebase.User | undefined>(temp ? JSON.parse(temp) : undefined)

    useEffect(()=>{
        const listener = firebase.auth().onAuthStateChanged((authUser) =>{
            if(authUser){
                localStorage.setItem('authUser', JSON.stringify(authUser))
                setUser(authUser)
            } else{
                localStorage.removeItem('authUser')
                setUser(undefined)
            }
        })
        return () => listener()
    }, [firebase])

    return user
}