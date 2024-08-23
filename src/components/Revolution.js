import React from "react";
import "./Revolution.css";
import o21 from "../assets/o21.png";
import o22 from "../assets/o22.png";
import o31 from "../assets/o31.png";
import o32 from "../assets/o32.png";
import o41 from "../assets/o41.png";
import o42 from "../assets/o42.png";
import o43 from "../assets/o43.png";
import o5 from "../assets/o5.png";
import o52 from "../assets/o52.png";

function Revolution() {
  return (
    <div className="solar-system mt-[20%]">
      <div className="text-center justify-center items-center">
        <h1 className="font-semibold lg:text-5xl text-3xl ">
          We've really sped up our workflow
        </h1>
        <p className="mt-[4%]">
          We've just released a new update! Check out the all-new dashboard
          view. Pages now load faster. You can try us <br></br> for free for 30
          days.
          <p className="mt-[1%]"> Join 4,000+ companies already growing.</p>
        </p>
        <div className="flex text-center justify-center space-x-[1%] mt-[5%]">
          <h1 className="font-semibold py-3 px-5 starttoday">
            Start Learning Today
          </h1>
          <h1 className="font-semibold text-white bg-[rgba(127,110,252,1)] py-3 px-5 rounded-[8px] ">
            Join Now
          </h1>
        </div>
      </div>
      <div className="z-1">
        <div className="orbit-1"></div>
        <div className="orbit-2">
          <div className="orbit-container">
            <img src={o21} alt="o21" />
            <img src={o22} alt="o22" />
          </div>
        </div>
        <div className="orbit-3">
          <div className="orbit-container">
            <img src={o31} alt="o31" />
            <img src={o32} alt="o32" />
          </div>
        </div>
        <div className="orbit-4">
          <div className="orbit-container">
            <img src={o41} alt="o41" />
            <img src={o42} alt="o42" />
            <img src={o43} alt="o43" />
          </div>
        </div>
        <div className="orbit-5">
          <div className="orbit-container">
            <img src={o5} alt="o5" />
            <img src={o52} alt="o52" />
          </div>
        </div>
        <div className="orbit-6"></div>
      </div>
      <div></div>
    </div>
  );
}

export default Revolution;
