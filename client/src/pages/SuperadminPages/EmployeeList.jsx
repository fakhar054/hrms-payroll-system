import { useState } from "react";
import { Search, Filter, ArrowUpDown, MoreVertical } from "lucide-react";
import { FiSearch, FiBell, FiMail, FiChevronRight, FiCommand } from "react-icons/fi";

const EMPLOYEES = [
  {
    id: "EMP-001",
    name: "Emma Stone",
    email: "emma.stone@gmail.com",
    jobRole: "Product Manager",
    status: "Full Time",
  },
  {
    id: "EMP-002",
    name: "Liam Johnson",
    email: "liam.johnson@yahoo.com",
    jobRole: "UX Researcher",
    status: "Part Time",
  },
  {
    id: "EMP-003",
    name: "Sophia Turner",
    email: "sophia.turner@hotmail.com",
    jobRole: "Frontend Developer",
    status: "Contract",
  },
  {
    id: "EMP-004",
    name: "Michael Brown",
    email: "michael.brown@gmail.com",
    jobRole: "Backend Developer",
    status: "Full Time",
  },
   {
    id: "EMP-005",
    name: "Sophia Turner",
    email: "sophia.turner@hotmail.com",
    jobRole: "Frontend Developer",
    status: "Contract",
  },
  {
    id: "EMP-006",
    name: "Liam Johnson",
    email: "liam.johnson@yahoo.com",
    jobRole: "UX Researcher",
    status: "Part Time",
  },
  {
    id: "EMP-006",
    name: "Liam Johnson",
    email: "liam.johnson@yahoo.com",
    jobRole: "UX Researcher",
    status: "Part Time",
  },
  {
    id: "EMP-006",
    name: "Liam Johnson",
    email: "liam.johnson@yahoo.com",
    jobRole: "UX Researcher",
    status: "Part Time",
  },
  {
    id: "EMP-006",
    name: "Liam Johnson",
    email: "liam.johnson@yahoo.com",
    jobRole: "UX Researcher",
    status: "Part Time",
  },
  {
    id: "EMP-006",
    name: "Liam Johnson",
    email: "liam.johnson@yahoo.com",
    jobRole: "UX Researcher",
    status: "Part Time",
  },
];

export default function EmployeeList() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-4">
        <div className="flex flex-col ">
        <h1 className="text-[30px] md:text-[2.5vw] font-clash-bold text-black leading-none ">
          Hello <span className="text-orange-600">Shahzaib</span>
        </h1>
        <p className=" font-clash-medium text-gray-700">
          Hope you're having a <span className="">productive</span> day :)
        </p>
      </div>
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-6 border border-neutral-200 mt-[2vw]">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-2xl text-gray-800 font-clash-bold">
            Employees
          </h1>

          <div className="flex flex-wrap gap-3 font-clash-medium">
            {/* SEARCH */}
    
            <div className="flex items-center gap-2 bg-[#f8f8f8] border border-zinc-200 rounded-xl px-3 py-2  max-w-md">
                    <FiSearch className="text-black" size={20} />
                    <input
                      type="text"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="bg-transparent outline-none text-sm text-black placeholder-black w-full"
                    />
                    <div className="flex justify-center items-center">
                      <FiCommand />
                      
                    </div>
                  </div>
            

            {/* FILTER (UI ONLY) */}
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              Filter
            </button>

            {/* SORT (UI ONLY) */}
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
              <ArrowUpDown className="h-4 w-4" />
              Sort
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-auto h-[70vh] font-clash-medium">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-neutral-300">
                <th className="py-3 px-4">Employee ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Job Role</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {EMPLOYEES.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-b border-neutral-300 text-sm hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 font-medium text-gray-700">
                    {emp.id}
                  </td>
                  <td className="py-3 px-4">{emp.name}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {emp.email}
                  </td>
                  <td className="py-3 px-4">{emp.jobRole}</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={emp.status} />
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="p-2 rounded-lg hover:bg-gray-100">
                      <MoreVertical className="h-4 w-4 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE NOTE */}
        <p className="text-xs text-gray-400 mt-4">
          Optimized for tablet & mobile. Actions and filters will be wired with
          API later.
        </p>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    "Full Time": "bg-green-100 text-green-700",
    "Part Time": "bg-blue-100 text-blue-700",
    Contract: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        styles[status]
      }`}
    >
      {status}
    </span>
  );
}
