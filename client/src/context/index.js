"use client"
import { createContext,useContext, useState } from "react";

const AppContext=createContext();

export function AppWrapper({children}){
    let [info,setInfo]=useState({
        username:'',
        token:'',
        role:'user'
    });

    return(
        <AppContext.Provider value={{info,setInfo}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}