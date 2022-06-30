import { app } from "firebase";
import { createContext } from "react";

const FirebaseContext = createContext<any | undefined>(undefined);
export default FirebaseContext