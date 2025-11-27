import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair",{
      y:'100%',
      stagger: {
        amount: -0.25,
      },
    })
  });

  return (
    <div className="text-white">
      <div className="h-screen fixed z-10 flex w-full">
        <div className="stair h-full w-1/6 bg-black"></div>
        <div className="stair h-full w-1/6 bg-black"></div>
        <div className="stair h-full w-1/6 bg-black"></div>
        <div className="stair h-full w-1/6 bg-black"></div>
        <div className="stair h-full w-1/6 bg-black"></div>
        <div className="stair h-full w-1/6 bg-black"></div>       
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
