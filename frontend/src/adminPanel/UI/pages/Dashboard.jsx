import Header from "../commonComponents/Header";

const Dashboard = () => {
  return (
    <>
      <div className=" sm:flex bg-slate-300 h-screen">
        <Header />
        <div className=" w-full h-[90vh] flex flex-col justify-center items-center">
          <h1 className="text-[2rem] font-semibold text-center ">Dashboard</h1>
          <svg className="w-[50%] mx-auto " viewBox="0 0 24 24" id="dashboard">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
