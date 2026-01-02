import React from "react";
import { LuUsers } from "react-icons/lu";
import { RiBuilding2Line } from "react-icons/ri";
import { CiCreditCard2 } from "react-icons/ci";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function UserHome() {
  // 🔒 Hardcoded data
  const user = {
    name: "Admin User",
    role: "admin",
  };

  const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const totalSalary = 450000;

  const chartData = [
    { name: "18-25", age: 5 },
    { name: "26-30", age: 8 },
    { name: "31-35", age: 6 },
    { name: "36-40", age: 4 },
    { name: "40+", age: 2 },
  ];

  return (
    <div className="w-full h-full bg-white p-4">
      <div className="flex flex-col">
        <h1 className="text-[30px] md:text-[2.5vw] font-clash-bold text-black leading-none">
          Hello <span className="text-orange-600">{user.name}</span>
        </h1>
        <p className="font-clash-medium text-gray-700">
          Hope you're having a <span className="">productive</span> day :)
        </p>
      </div>

      <div className="flex gap-3 pt-[2vw] flex-wrap">
        <div className="p-4 bg-[#EEEEEE] flex flex-col justify-around flex-1 min-w-[250px] min-h-[170px] rounded-3xl space-y-6 transition duration-300 transform hover:scale-[1.03]">
          <div className="flex items-center font-clash-medium gap-3">
            <LuUsers className="text-[1.5rem]" />
            <h2 className="text-xl">Total Employees</h2>
          </div>
          <div>
            <p className="text-[2rem] md:text-[3rem] font-clash-semibold text-orange-500 leading-none">
              {users.length}
            </p>
          </div>
        </div>

        <div className="p-4 bg-[#EEEEEE] flex flex-col justify-around flex-1 min-w-[250px] min-h-[170px] rounded-3xl space-y-6 transition duration-300 transform hover:scale-[1.03]">
          <div className="flex items-center font-clash-medium gap-3">
            <RiBuilding2Line className="text-[1.5rem]" />
            <h2 className="text-xl">Total Departments</h2>
          </div>
          <div>
            <p className="text-[2rem] md:text-[3rem] font-clash-semibold text-orange-500 leading-none">
              4
            </p>
          </div>
        </div>

        <div className="p-4 bg-[#EEEEEE] flex flex-col justify-around flex-1 min-w-[250px] min-h-[170px] rounded-3xl space-y-6 transition duration-300 transform hover:scale-[1.03]">
          <div className="flex items-center font-clash-medium gap-3">
            <CiCreditCard2 className="text-[1.5rem]" />
            <h2 className="text-xl">Total Salary</h2>
          </div>
          <div>
            <p className="text-[2rem] font-clash-semibold text-orange-500 leading-none">
              <span className="text-2xl">Rs</span>{" "}
              {totalSalary.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-[2vw] gap-3">
        <div className="flex flex-col flex-1 md:min-w-[400px] w-[700px] h-[150px] md:h-[350px] bg-[#EEEEEE] p-6 rounded-3xl font-clash-medium">
          <h3 className="text-black mb-4">Employee Age Distribution</h3>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#444"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#888"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="#888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={{ fill: "#FFD580" }}
                contentStyle={{
                  backgroundColor: "#111",
                  border: "none",
                  borderRadius: "8px",
                }}
              />
              <Bar
                dataKey="age"
                fill="#FF7E00"
                radius={[4, 4, 0, 0]}
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="md:min-w-[400px] w-[700px] h-[150px] md:h-[350px] rounded-3xl bg-[#eeeeee] flex flex-1"></div>
      </div>
    </div>
  );
}

export default UserHome;
