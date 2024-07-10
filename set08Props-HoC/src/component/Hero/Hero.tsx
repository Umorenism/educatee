import { FaUserGraduate } from "react-icons/fa";
import { Card } from "../Card";
import { PeopleWrapper } from "../PeopleWrapper";
import { TitleWrapper } from "../TitleWrapper";

export const Hero = () => {
  return (
    <>
      <div className="bg-slate-100 w-full p-4 py-4  ">
        <div className=" shadow-md  p-4 rounded-md flex justify-between items-center bg-white text-slate-500">
          <div>
            <h2 className="text-2xl font-bold">Welcome back,Chris</h2>
            <h5>Here's an overview of your ongoing cousrses</h5>
          </div>
          <div>
            <FaUserGraduate
              className="border rounded-full h-10 w-10 p-2"
              size={20}
            />
          </div>
        </div>
        <div>
          <Card />
          <TitleWrapper />
          <PeopleWrapper />
        </div>
      </div>
    </>
  );
};
