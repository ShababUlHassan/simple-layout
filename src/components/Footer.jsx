import React from "react";
import { useStudent } from "../Hooks/useContext";

const Footer = () => {
  const { myName } = useStudent();
  return (
    <div className="bg-gray-500">
      <p className="text-white text-center">@CopyRight 2024 made by {myName}</p>
    </div>
  );
};

export default Footer;
