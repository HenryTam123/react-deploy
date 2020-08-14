import React from "react";
import Ufo from "../Images/ufo.png";
import { Controller, Scene } from "react-scrollmagic";

const ScrollComponent = () => {
  return (
    <div>
      <Controller>
        <Scene triggerElement=".animation" duration="1000" triggerHook="0">
          <section className="animation">
            <img className="ufo" src={Ufo} alt="ufo" />
          </section>
        </Scene>
      </Controller>
    </div>
  );
};

export default ScrollComponent;
