import React from "react";
import { LuUsers } from "react-icons/lu";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import LeaveTable from "components/UI/LeaveTable";

function Leaves() {
  

 

  return (
    <div className="w-full h-full bg-white p-4">
      {/* HEADER */}
      <div className="flex flex-col">
        <h1 className="text-[30px] md:text-[2.5vw] font-clash-bold text-black leading-none">
          Hello <span className="text-orange-600">Shahzaib</span>
        </h1>
        <p className="font-clash-medium text-gray-700">
          Hope you're having a productive day :)
        </p>
      </div>

      {/* STATS (still static for now) */}
      <div className="flex gap-3 pt-[2vw] flex-wrap">
        <StatCard title="Total Leaves" value={8} icon={<LuUsers />} />
        <StatCard title="Leaves Accepted" value={4} icon={<FiUserCheck />} />
        <StatCard title="Leaves Rejected" value={2} icon={<FiUserX />} />
      </div>

      {/* TABLE */}
      <div className="mt-[2vw]">
        {/* Redux-powered table */}
        <LeaveTable  />
      </div>
    </div>
  );
}

export default Leaves;

/* ---------------- STAT CARD ---------------- */

const StatCard = ({ title, value, icon }) => (
  <div className="p-4 bg-[#EEEEEE] flex flex-col justify-around flex-1 min-w-[250px] min-h-[170px] rounded-3xl space-y-6 transition hover:scale-[1.03]">
    <div className="flex items-center font-clash-medium gap-3 text-lg">
      {icon}
      <h2>{title}</h2>
    </div>
    <p className="text-[2rem] md:text-[3rem] font-clash-semibold text-orange-500">
      {value}
    </p>
  </div>
);
