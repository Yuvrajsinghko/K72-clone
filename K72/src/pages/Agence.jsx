import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

function Agence() {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "/Images/image101.jpg",
    "/Images/image102.jpg",
    "/Images/image103.jpg",
    "/Images/image104.jpg",
    "/Images/image105.jpg",
    "/Images/image106.jpg",
    "/Images/image107.jpg",
    "/Images/image108.jpg",
    "/Images/image109.jpg",
    "/Images/image110.jpg",
    "/Images/image111.jpg",
    "/Images/image112.jpg",
  ];

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 25.5%",
        end: "top -120%",
        pin: true,
        scrub: true,
        onUpdate: (event) => {
          let imageIndex = Math.floor(event.progress * (imageArray.length-1));
          imageRef.current.src = imageArray[imageIndex];
          
        },
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className=" absolute overflow-hidden h-[19vw] top-55 left-[29.8vw] w-[15vw] rounded-4xl  "
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="/Images/image101.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className=" mt-[60vh]">
            <h1 className="text-[20vw] uppercase text-center leading-[17vw] ">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl  ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
          <div className="box mt-[16vh] gap-[2vw] h-[55vh]  flex justify-center items-center pl-[10vw] pr-[10vw]">
            <div className="box1  p-[1vw] flex flex-col justify-between text-[2.2vh] h-full w-[30vw]">
              <h1>Expertise</h1>
              <p>
                Our Work_ Born in curiosity, raised by dedication and fed with a
                steady diet of creativity.
              </p>
            </div>
            <div className="box2 text-[2.2vh] p-[1vw]   justify-between flex flex-col h-full w-[30vw]">
              <ul>
                <li>Strategy</li>
                <li>Advertising</li>
                <li>Branding</li>
                <li>Design</li>
                <li>Content</li>
              </ul>
              <p>
                Our Creative_ Simmering in an environment where talent can come
                to a full boil. Encouraged to become the best versions of
                ourselves.
              </p>
            </div>
            <div className="box3  p-[1vw]  text-[2.2vh] justify-end flex flex-col h-full w-[30vw]">
              Our Culture_ We’re open to each other. Period. The team works
              together to create a space that makes us proud.
            </div>
          </div>
        </div>
      </div>
      <div className="section2"></div>
    </div>
  );
}

export default Agence;
