import React, { useState } from "react";
import { LuUsers } from "react-icons/lu";
import { FiUserCheck, FiUserX } from "react-icons/fi";

import LeaveTable from "components/UI/LeaveTable";

function Leaves() {
  // 🔒 Hardcoded user
  const user = {
    name: "Admin User",
    role: "admin",
  };

  const isAdmin = user.role === "admin";

  // 🔒 Hardcoded leave stats
  const total = 8;
  const approved = 4;
  const rejected = 2;
  const pending = 2;

  // 🔒 Hardcoded leaves list
  const leaves = [
    {
      _id: "1",
      employeeName: "Ali Khan",
      reason: "Medical",
      fromDate: "2024-01-10",
      toDate: "2024-01-12",
      status: "approved",
    },
    {
      _id: "2",
      employeeName: "Sara Ahmed",
      reason: "Personal",
      fromDate: "2024-01-15",
      toDate: "2024-01-16",
      status: "pending",
    },
    {
      _id: "3",
      employeeName: "Usman Ali",
      reason: "Family Event",
      fromDate: "2024-01-20",
      toDate: "2024-01-22",
      status: "rejected",
    },
  ];

  // 🔒 Dummy action handler
  const handleAction = (id, status) => {
    alert(`Leave ${status.toUpperCase()} (ID: ${id})`);
  };

  return (
    <div className="w-full h-full bg-white p-4">
      {/* HEADER */}
      <div className="flex flex-col">
        <h1 className="text-[30px] md:text-[2.5vw] font-clash-bold text-black leading-none">
          Hello <span className="text-orange-600">{user.name}</span>
        </h1>
        <p className="font-clash-medium text-gray-700">
          Hope you're having a productive day :)
        </p>
      </div>

      {/* STATS */}
      <div className="flex gap-3 pt-[2vw] flex-wrap">
        <StatCard title="Total Leaves" value={total} icon={<LuUsers />} />
        <StatCard
          title="Leaves Accepted"
          value={approved}
          icon={<FiUserCheck />}
        />
        <StatCard title="Leaves Rejected" value={rejected} icon={<FiUserX />} />
      </div>

      {/* TABLE */}
      <div className="mt-[2vw]">
        <LeaveTable leaves={leaves} isAdmin={isAdmin} onAction={handleAction} />
      </div>
    </div>
  );
}

export default Leaves;

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
