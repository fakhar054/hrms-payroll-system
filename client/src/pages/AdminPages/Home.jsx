import React from "react";

const demoUser = {
  name: "John Doe",
  role: "admin",
};

const totalSalary = 250000; // Hardcoded total salary
const totalUsers = 12; // Hardcoded total users
const totalDepartments = 4; // Hardcoded total departments

function Home() {
  return (
    <div className="bg-black w-full p-5 space-y-[4vw]">
      <div className="flex flex-col">
        <h1 className="md:text-[2.5vw] font-clash-bold text-white leading-none">
          Hello <span className="text-orange-500">{demoUser.name}</span>
        </h1>
        <p className="font-clash-medium text-neutral-400">
          Hope you're having a <span className="text-white">productive</span>{" "}
          day :)
        </p>

        {/* CARDS */}
        <div className="flex items-center flex-wrap gap-6 pt-[4vw]">
          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Total Users</h3>
            <div>
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">
                {totalUsers}
              </p>
            </div>
          </div>

          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Total Departments</h3>
            <div>
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">
                {totalDepartments}
              </p>
            </div>
          </div>

          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Total Salary</h3>
            <div>
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">
                ${totalSalary.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="w-full h-[50vh] bg-transparent backdrop-blur-4xl bg-white/4 rounded-4xl p-6 flex items-center justify-center text-gray-400">
        Chart will go here (hardcoded demo)
      </div>

      {/* User Leave List Placeholder */}
      <div className="w-full h-[30vh] bg-transparent backdrop-blur-4xl bg-white/4 rounded-4xl p-6 flex items-center justify-center text-gray-400">
        User leave list will go here (hardcoded demo)
      </div>
    </div>
  );
}

export default Home;
