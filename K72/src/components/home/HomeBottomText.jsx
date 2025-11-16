import React from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {
  return (
    <div className="font-[font2] flex justify-center mb-5 gap-2">
      <div  className="hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link
          className="text-[6.5vw] leading-[5vw] border-5 border-white hover:border-[#D3FD50] rounded-full px-10 pt-6  uppercase"
          to="/projects"
        >
          Projects
        </Link>
      </div>
      <div className=" hover:text-[#D3FD50]">
        <Link
          className="text-[6.5vw] leading-[5vw] border-5 border-white hover:border-[#D3FD50] rounded-full px-10 pt-6   uppercase"
          to="/agence"
        >
          Agence
        </Link>
      </div>
    </div>
  );
}

export default HomeBottomText;
