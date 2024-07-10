import { Button } from "antd";
import { FaAddressBook, FaAmazon, FaHackerNews } from "react-icons/fa";

interface GlobalButtonProps {
  title: string;
  icon: string;
  bgColor: string;
}

export const GlobalButton = () => {
  return (
    <div className="py-4 flex flex-col hover:text-white mb-2 rounded-xl p-4 text-black">
      <div className="mb-2">
        <Button block style={{ border: "none", width: "100%" }}>
          Overview
        </Button>
        <Button block style={{ border: "none", width: "100%" }}>
          Courses
        </Button>
      </div>
      <div className="mb-2 ">
        <Button block style={{ border: "none", width: "100%" }}>
          Schedule
        </Button>
      </div>
      <Button block style={{ border: "none", width: "100%" }}>
        Assignment
      </Button>
    </div>
  );
};
