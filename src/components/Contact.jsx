import React from "react";
import { useStudent } from "../Hooks/useContext";

const Contact = () => {
    const {myName} = useStudent()
  return (
    <div className="flex justify-center h-[90vh] items-center flex-col gap-5">
      <h3 className="text-red-400 font-semibold text-[30px]">Contact Page</h3>
      <p>Show Fetch Data Here</p>
      <button className="border py-2 px-5 rounded-md">Cliick to View</button>
     
    </div>
  );
};

export default Contact;
