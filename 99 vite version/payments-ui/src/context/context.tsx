import {createContext} from "react";

export type userType = {id: number, name : String, role : String};
export type homepageMountReturnType = { onLoginStateChanged : (newId: number) => void};

export type userContextType = userType & homepageMountReturnType & { login : (user : userType) => void, logout : () => void};

export const UserContext : React.Context<userContextType> = 
    createContext<userContextType>({id: 0, name : "", role : "", login : () => {}, logout: () => {}, onLoginStateChanged : () => {} });
