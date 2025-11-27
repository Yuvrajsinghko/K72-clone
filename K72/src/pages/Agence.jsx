import React from "react";

function Agence() {
  return (
    <div className=" font-[font2]">
      <div className=" mt-[66vh]">
        <h1 className="text-[19vw] uppercase text-center leading-[14vw] ">
          SEVEN7Y <br />
          TWO
        </h1>
      </div>
      <div className="pl-[40%] mt-20">
        <p className="text-6xl  ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
          inquisitive and open-minded, and we make sure creativity crowds out
          ego from every corner. A brand is a living thing, with values, a
          personality and a story. If we ignore that, we can achieve short-term
          success, but not influence that goes the distance. We bring that
          perspective to every brand story we help tell.
        </p>
      </div>
      <div className="box mt-[16vh] gap-[2vw] h-[55vh]  flex justify-center items-center pl-[10vw] pr-[10vw]">
        <div className="box1  p-[1vw] flex flex-col justify-between text-[2.2vh] h-[100%] w-[30vw]">
          <h1>Expertise</h1>
          <p>
            Our Work_ Born in curiosity, raised by dedication and fed with a
            steady diet of creativity.
          </p>
        </div>
        <div className="box2 text-[2.2vh] p-[1vw]   justify-between flex flex-col h-[100%] w-[30vw]">
          <ul>
            <li>Strategy</li>
            <li>Advertising</li>
            <li>Branding</li>
            <li>Design</li>
            <li>Content</li>
          </ul>
          <p>
            Our Creative_ Simmering in an environment where talent can come to a
            full boil. Encouraged to become the best versions of ourselves.
          </p>
        </div>
        <div className="box3  p-[1vw]  text-[2.2vh] justify-end flex flex-col h-[100%] w-[30vw]">
          Our Culture_ We’re open to each other. Period. The team works together
          to create a space that makes us proud.
        </div>
      </div>
    </div>
  );
}

export default Agence;
