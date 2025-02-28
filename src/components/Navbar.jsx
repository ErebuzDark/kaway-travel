import React from "react";
import { useNavigate } from "react-router";

// icons
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-white shadow py-3">
      <div className="flex items-center justify-between px-5 sm:mx-[11.6%]">
        <div>
          <img src="/KawayLogo.png" alt="kawayLogo" className="w-44"/>
        </div>
        <div>
          <button onClick={() => navigate('/')} className="flex  items-center gap-2 btn-primary text-white">Logout<IoIosLogOut /></button>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
