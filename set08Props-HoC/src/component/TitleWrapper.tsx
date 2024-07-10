export const TitleWrapper = () => {
  return (
    <div className="py-5 p-5 text-slate-950">
      <div className="bg-gray-300 py-3 w-full flex justify-between items-center p-4 flex-col md:flex-row gap-3 mx-auto rounded-lg text-start">
        <input type="checkbox" />
        <h2 className="py-2  p-2 w-full">Student Name</h2>
        <h2 className="py-2  p-2 w-full">Courses</h2>
        <h2 className="py-2  p-2 w-full">Tuitions</h2>
        <h2 className="py-2  p-2 w-full">Progress</h2>
        <h2 className="py-2  p-2 w-full">Date</h2>
        <h2 className="py-2  p-2 w-full"></h2>
      </div>
    </div>
  );
};
