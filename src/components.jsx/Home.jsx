import React from "react";

function Home() {
  return (
    <div className="w-full relative ">
        <img className="h-[30vh] md:h-[40vh] w-full object-cover object-center brightness-50" src="/computer.png" alt="" />
        <div className="absolute bottom-5 left-8 md:left-44 ">
        <h1 className="text-xl md:text-3xl  text-white font-bold ">
          Computer Engineering
        </h1>
        <p className="text-xs md:text-sm md:font-bold text-slate-300">142,765 comptuer engineer follow this</p>
  
        </div>
         </div>
  );
}
export default Home;
