import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Django from "../assets/django.png";
import Flask from "../assets/flask.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Typescript from "../assets/typescript.png";
import NodeJs from "../assets/nodejs.png";
import DotNet from "../assets/dotnet.png";
import AWS from "../assets/aws.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#1E1E1E] text-gray-300 p-4"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto mt-24 p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300 ">
            Skills
          </p>
          <p className="py-4">Below are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Django} alt="Tharan Bala" />
            <p className="my-4">DJANGO</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto bg-white"
              src={Flask}
              alt="Tharan Bala"
            />
            <p className="my-4">FLASK</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto bg-white"
              src={NodeJs}
              alt="Tharan Bala"
            />
            <p className="my-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto bg-white"
              src={DotNet}
              alt="Tharan Bala"
            />
            <p className="my-4">.NET</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="Tharan Bala" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Typescript} alt="Tharan Bala" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="Tharan Bala" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tharan Bala" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="Tharan Bala" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="Tharan Bala" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="Tharan Bala" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="Tharan Bala" />
            <p className="my-4">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
