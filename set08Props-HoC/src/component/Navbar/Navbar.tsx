import { useState } from "react";
import { Link } from "react-router-dom";
import pic2 from "../../../public/demmy.png";
import { FaSearch, FaBell, FaRegMinusSquare } from "react-icons/fa";

export const Navbar = () => {
  const [text, setText] = useState("");
  return (
    <div className=" h-[60px] sticky w-full top-0 z-50 flex justify-center shadow-lg bg-white p-5">
      <div className="flex w-full justify-between items-center ">
        <div>
          <Link to="/" className="text-2xl text-blue-600 font-bold">
            Educatee
          </Link>
        </div>
        <div>
          <div className="p-2 border-2 rounded-md flex m-2 justify-between items-center">
            <FaSearch className="mr-2 text-slate-400" />
            <input
              placeholder="search for your student..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 w-full h-full border-none bg-none outline-none"
            />
            <div className="gap-2 flex ml-2">
              <div className="h-[20px] flex justify-center items-center rounded-md w-[20px] bg-black text-white">
                <FaRegMinusSquare />
              </div>
              <div className="h-[20px] flex justify-center items-center rounded-md w-[20px] bg-black text-white">
                F
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <div className="hidden md:flex">
            <div className="flex gap-2 items-center justify-center">
              <div className="h-[25px] w-[25px] rounded-full border flex items-center justify-center">
                <FaBell />
              </div>
              <img src={pic2} className=" w-[35px] h-[35px] rounded-full" />
              <div>
                <h2>Victor Umoren</h2>
                <p>@Chrisdocaoches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
