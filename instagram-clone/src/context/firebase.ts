import { app } from "firebase";
import { createContext } from "react";

const FirebaseContext = createContext<app.App | undefined>(undefined);
export default FirebaseContext;