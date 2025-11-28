import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

function Stairs() {
  let stairParentRef = useRef(null);
  let currentPath = useLocation().pathname;
  console.log(currentPath);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairParentRef.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });
  }, [currentPath]);
  return (
    <div>
      <div ref={stairParentRef} className="h-screen fixed z-10 top-0 w-full">
        <div className="h-full w-full flex ">
          <div className="stair h-full w-1/6 bg-black"></div>
          <div className="stair h-full w-1/6 bg-black"></div>
          <div className="stair h-full w-1/6 bg-black"></div>
          <div className="stair h-full w-1/6 bg-black"></div>
          <div className="stair h-full w-1/6 bg-black"></div>
          <div className="stair h-full w-1/6 bg-black"></div>
        </div>
      </div>
    </div>
  );
}

export default Stairs;
