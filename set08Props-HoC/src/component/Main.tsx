interface MainProps {
  children: any;
}
export const Main = ({ children }: MainProps) => {
  return (
    <>
      <div className=" p-4 sm:ml-64 text-white flex  flex-col lg:flow-row mt-14 h-screen">
        {children}
      </div>
    </>
  );
};
