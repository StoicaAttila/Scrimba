import {createContext} from 'react'
import firebase, { User } from "firebase";

const UserContext = createContext<User | undefined>(undefined);

export default UserContext