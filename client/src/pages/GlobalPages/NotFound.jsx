import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen bg-[#DBAEFF] flex flex-col items-center justify-around">
      <div className="">
        <h1 className="font-clash-bold text-4xl ">Oops !</h1>
      </div>


      <div className="font-clash-bold text-[10vw] relative leading-none">
        <h1 className=" font-clash-bold text-[20vw] relative text-[#EEDCFC]">404</h1>
        <img 
        src="/images/Group 8.png" 
        alt="" 
        className="w-100 absolute top-10 left-35" />
      </div>


      <div className="  ">
        <button 
        className=" flex justify-center items-center gap-1 leading-none font-clash-medium"
        onClick={() => navigate(`/admin`)}
        
        >
          <MdArrowBackIosNew size={15}/>
          Go Back
        </button>
      </div>
    </section>
  );
};

export default NotFound;
