import React from "react";
import Addtodo from "./Addtodo";
import Todos from "./Todos";

const Blogs = () => {
  return (
    <div className="flex justify-center h-[90vh] items-center flex-col">
      <h3 className="text-red-400 font-semibold text-[30px]">Blogs Page</h3>
      <Addtodo />
      <Todos />
    </div>
  );
};

export default Blogs;
