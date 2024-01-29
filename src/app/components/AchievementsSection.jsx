"use client";
import React from "react";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiPassport } from "react-icons/si";
import { SiNestjs } from "react-icons/si";



const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
     
      <div className=" sm:border-[#4961d9] sm:border rounded-md   py-8 px-16 flex flex-col sm:flex-row items-center justify-between bg-amber-200">
      <div className="mb-4 text-center text-2xl font-bold text-black-700">FrontEnd</div>
      <div className="mb-4">
            <FaHtml5 size={64} />
            <p className="text-center font-medium">HTML5</p>
        </div>
        <div className="mb-4">
            <IoLogoCss3 size={64} />
            <p className="text-center font-medium">CSS3</p>
          </div>
          <div className="mb-4">
            <IoLogoJavascript size={64} />
            <p className="text-center font-medium">JavaScript</p>
          </div>
          <div className="mb-4">
            <FaReact size={64} />
            <p className="text-center font-medium">React</p>
          </div>
          <div className="mb-4">
            <SiTailwindcss size={64} />
            <p className="text-center font-medium">Tailwind CSS</p>
          </div>
          <div className="mb-4">
            <SiMui size={64} />
            <p className="text-center font-medium">Material-UI</p>
          </div>
          <div className="mb-4">
            <SiRedux size={64} />
            <p className="text-center font-medium">Redux</p>
          </div>
      </div>
      <div className=" sm:border-[#4961d9] sm:border rounded-md   py-8 px-16 flex flex-col sm:flex-row items-center justify-between bg-amber-200 mt-4">
      <div className="mb-4 text-center text-2xl font-bold text-black-700">Backend</div>
      <div className="mb-4">
            <FaNodeJs size={64} />
            <p className="text-center font-medium">Node Js</p>
        </div>
        <div className="mb-4">
            <SiExpress size={64} />
            <p className="text-center font-medium">Express Js</p>
          </div>
        <div className="mb-4">
            <SiNestjs size={64} />
            <p className="text-center font-medium">NestJs</p>
        </div>
          <div className="mb-4">
            <SiMongodb size={64} />
            <p className="text-center font-medium">Mongo DB</p>
          </div>
          <div className="mb-4">
            <SiMysql size={64} />
            <p className="text-center font-medium">Mysql</p>
          </div>
          <div className="mb-4">
            <SiPostman size={64} />
            <p className="text-center font-medium">Postman</p>
          </div>
          <div className="mb-4">
            <SiPassport size={64} />
            <p className="text-center font-medium">Passport Js</p>
          </div>
       
      </div>

    </div>
  );
};

export default AchievementsSection;
