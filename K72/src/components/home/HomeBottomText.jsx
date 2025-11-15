import React from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {
  return (
    <div className="font-[font2] flex justify-center gap-2">
      <div>
        <Link
          className="text-[6.5vw] leading-[5vw] border-5 border-white rounded-full px-10 pt-6  uppercase"
          to="/projects"
        >
          Projects
        </Link>
      </div>
      <div>
        <Link
          className="text-[6.5vw] leading-[5vw] border-5 border-white rounded-full px-10 pt-6  uppercase"
          to="/agence"
        >
          Agence
        </Link>
      </div>
    </div>
  );
}

export default HomeBottomText;
