import { Button } from "antd";
import pic3 from "../../../public/demmy.png";
import { GlobalButton } from "../GlobalButton";
import {
  FaCircle,
  FaDiscourse,
  FaHandPointDown,
  FaItunes,
  FaSchool,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const link = [
  {
    href: "",
    text: "Overview",
    icon: FaCircle,
    color: "bg-black text-white",
  },
  {
    href: "",
    text: "Overview",
    icon: FaCircle,
    color: "bg-black text-white",
  },
  {
    href: "",
    text: "Overview",
    icon: FaCircle,
    color: "bg-black text-white",
  },
  {
    href: "",
    text: "Overview",
    icon: FaCircle,
    color: "bg-black text-white",
  },
];

export const Siderbar = () => {
  return (
    <div
      className={`fixed top-0 left-0 z-40 w-[300px] bg-slate-100 h-screen pt-20 border-r border-gray-200 hidden md:flex`}
    >
      <div className="px-3 overflow-y-auto h-full">
        <div className="bg-white px-3 py-5 flex justify-center items-center rounded-md">
          <img src={pic3} className="h-[35px] w-[35px] rounded-full" />
          <div>
            <h2 className="mt-5">Umoren victor</h2>
            <p className="flex gap-2">
              @Chrisdocaoches
              <span className="bg-blue-600 text-sm py-1 px-1 rounded-md text-white ">
                Coach
              </span>
            </p>
          </div>
        </div>
        <ul className="py-3">
          <Link to="/">
            <li className="bg-black p-1 flex items-center gap-2 text-white py-4 m-3 rounded-lg">
              <FaHandPointDown />
              Overview
            </li>
          </Link>
          <Link to="/">
            <li className=" p-1 flex items-center gap-2 text-slate-950 py-4 m-3 rounded-lg hover:bg-black hover:text-white">
              <FaDiscourse />
              Courses
            </li>
          </Link>
          <Link to="/">
            <li className=" flex items-center gap-2 text-slate-950 py-4 m-3 rounded-lg p-1 hover:bg-black hover:text-white">
              <FaItunes />
              Schedule
            </li>
          </Link>
          <Link to="/">
            <li className="p-1 flex items-center gap-2 text-slate-950 py-4 m-3 rounded-lg hover:bg-black hover:text-white">
              <FaSchool />
              Asssiognment
            </li>
          </Link>
        </ul>

        <div className="flex flex-col justify-center items-center p-4 bg-white rounded-md mt-10 m-5">
          <div className="aspect-video h-[150px] w-full">
            <img
              src={pic3}
              alt=""
              className=" h-full object-contain w-full p-2"
            />
          </div>
          <p className="text-black text-sm font-bold">
            Upgrade for more access
          </p>
          <p className="text-slate-600 items-center p-2">
            With the upgraded version,you can use with AI and other new
            technologies.
          </p>
          <button className="py-2 bg-blue-500 text-white mt-10 rounded-xl p-4">
            Go Premium
          </button>
        </div>
        {/* <div className="py-2 bg-white text-black flex items-center rounded-md w-full h-full mt-10 ">
          
          <div className="">
           
          </div>
        </div>

        <GlobalButton />
      </div>
      <div className="shadow-2xl py-4">
        <div className="flex flex-col justify-center items-center">
          <img
            src={pic3}
            alt=""
            className="max-h-[100px] object-cover w-full p-2"
          />
          <p className="text-black text-sm font-bold">
            Upgrade for more access
          </p>
          <p className="text-slate-600 items-center p-2">
            With the upgraded version,you can use with AI and other new
            technologies.
          </p>
          <button className="py-2 bg-blue-500 text-white mt-10 rounded-xl p-4">
            Go Premium
          </button>
        </div> */}
      </div>
    </div>
  );
};
