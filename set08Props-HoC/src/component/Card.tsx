import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowsAlt,
  FaLongArrowAltLeft,
} from "react-icons/fa";

export const Card = () => {
  return (
    <div className=" text-slate-950 grid py-5 grid-cols-1 md:grid-cols-4 p-4 gap-3 mb-3">
      <div className="max-h-[200px] w-full p-4 shadow-2xl bg-white rounded-md ">
        <div className="flex justify-between items-end  h-[50px] w-full p-2">
          <h1>
            Total no.of <br />
            <span>Student</span>
          </h1>
          <form className="outline-none ">
            <select className="border-gray-500">
              <option disabled>All time</option>
              <option value="1">English</option>
              <option value="2">English</option>
              <option value="3">English</option>
              <option value="4">English</option>
            </select>
          </form>
        </div>
        <div className="flex justify-between items-end h-[100px] w-full p-2">
          <h1 className="text-slate-500 font-bold text-3xl">358</h1>
          <h1 className="text-purple-700 flex justify-center items-center gap-1">
            view <FaArrowRight />
          </h1>
        </div>
      </div>

      <div className="max-h-[200px] w-full p-4 shadow-2xl bg-white rounded-md ">
        <div className="flex justify-between  h-[100px] w-full p-2">
          <h1>
            Courses <br />
            <span>taught</span>
          </h1>
          <form className="outline-none ">
            <select className="border-gray-500">
              <option disabled>All time</option>
              <option value="1">English</option>
              <option value="2">English</option>
              <option value="3">English</option>
              <option value="4">English</option>
            </select>
          </form>
        </div>
        <div className="flex justify-between items-end h-[50px] w-full p-2">
          <h1 className="text-slate-500 font-bold text-3xl">18</h1>
          <h1 className="text-purple-700 flex justify-center items-center gap-1">
            view <FaArrowsAlt />
          </h1>
        </div>
      </div>
      <div className="max-h-[200px] w-full p-4 shadow-2xl bg-white rounded-md ">
        <div className="flex justify-between  h-[100px] w-full p-2">
          <h1>
            Total no.of <br />
            <span>hours taught</span>
          </h1>
          <form className="outline-none ">
            <select className="border-gray-500">
              <option disabled>All time</option>
              <option value="1">English</option>
              <option value="2">English</option>
              <option value="3">English</option>
              <option value="4">English</option>
            </select>
          </form>
        </div>
        <div className="flex justify-between items-end h-[50px] w-full p-2">
          <h1 className="text-slate-500 font-bold text-3xl">4,000</h1>
          <h1 className="text-purple-700 flex justify-center items-center gap-1">
            view <FaArrowRight />
          </h1>
        </div>
      </div>
      <div className="max-h-[200px] w-full p-4 shadow-2xl bg-white rounded-md ">
        <div className="flex justify-between  h-[100px] w-full p-2">
          <h1>
            pending <br />
            <span>assignment</span>
          </h1>
          <form className="outline-none ">
            <select className="border-gray-500">
              <option disabled>All time</option>
              <option value="1">English</option>
              <option value="2">English</option>
              <option value="3">English</option>
              <option value="4">English</option>
            </select>
          </form>
        </div>
        <div className="flex justify-between items-end h-[50px] w-full p-2">
          <h1 className="text-slate-500 font-bold text-3xl">14</h1>
          <h1 className="text-purple-700 flex justify-center items-center gap-1">
            view <FaArrowRight />
          </h1>
        </div>
      </div>
    </div>
  );
};
