export const ButtonWrapper = () => {
  return (
    <div className="py-5 p-5 ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className=" py-3 max-w-[530px] flex justify-between items-center p-2 flex-col md:flex-row gap-3 border rounded-md ">
          <button className="py-2 rounded-md w-full p-2 hover:bg-slate-400 bg-white">
            All view
          </button>
          <button className="py-3 rounded-md hover:bg-slate-400 bg-white p-2 w-full">
            Completed
          </button>
          <button className="py-3 rounded-md hover:bg-slate-400 bg-white p-2 w-full">
            Ongoing
          </button>
          <button className="py-3 rounded-md hover:bg-slate-400 bg-white p-2 w-full">
            Inactive
          </button>
        </div>
        <div>
          <button className="py-3  rounded-md hover:bg-slate-400 bg-white p-2 w-full">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};
