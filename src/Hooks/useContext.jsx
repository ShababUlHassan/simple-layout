import { createContext, useContext, useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({children})=>{
    const myName = "Shabab UL Hassan";
    const [student, setStudents] = useState([]);

    const fetchdata = async()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await response.json();
        console.log(result)
    }
    
    return(
        <InfoContext.Provider value={{myName:myName, student:student,setStudents}}>
            {children}
        </InfoContext.Provider>
    )
} 


export const useStudent = ()=>{
    return useContext(InfoContext);
}