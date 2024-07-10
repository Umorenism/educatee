export const namePro = [
  {
    img: "../../public/re.jpeg",
    name: "Ezenowo peters",
    des: "Design thinking",
    fees: "$5,000",
    isCompleted: "completed",
    date: "Aprils",
  },
  {
    img: "",
    name: "Peters peters",
    des: "Design as a bussiness ",
    fees: "$7,000",
    isCompleted: "completed",
    date: "Aprils",
  },
  {
    img: "",
    name: "Bob bob",
    des: "Design thinking and strategy",
    fees: "$5,000",
    isCompleted: "completed",
    date: "Aprils",
  },
  {
    img: "",
    name: "Jessica Roberto",
    des: "Graphics and visual design",
    fees: "$3,000",
    isCompleted: "completed",
    date: "Aprils",
  },
  {
    img: "",
    name: "Daniella Robbert",
    des: "Design plan and strategy",
    fees: "$5,000",
    isCompleted: "completed",
    date: "Aprils",
  },
];
export const PeopleWrapper = () => {
  return (
    <div className="py-5  border-gray-200 ">
      {namePro.map((item, index) => {
        return (
          <div
            key={index}
            className=" bg-white text-slate-950 shadow-lg  py-3 w-full flex  justify-between items-center p-5 flex-col md:flex-row gap-3  mx-auto rounded-md hover:bg-gray-400 mb-3"
          >
            <input type="checkbox" />
            <h2 className="py-2  p-2 w-full flex gap-2">
              <img
                src={item.img}
                alt=""
                className=" w-[20px] h-[20px] rounded-full"
              />
              <p>{item.name}</p>
            </h2>
            <h2 className="py-2  p-2 w-full">{item.des}</h2>
            <h2 className="py-2  p-2 w-full">{item.fees}</h2>
            <h2 className="py-2  p-2 w-full">{item.isCompleted}</h2>
            <h2 className="py-2  p-2 w-full">{item.date}</h2>
            <h2 className="py-2  p-2 w-full">:</h2>
          </div>
        );
      })}
    </div>
  );
};
