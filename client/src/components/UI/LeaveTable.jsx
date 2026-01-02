import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FiSearch,
  FiBell,
  FiMail,
  FiChevronRight,
  FiCommand,
} from "react-icons/fi";

const LEAVES = [
  {
    id: "LV-001",
    empId: "EMP-001",
    name: "Emma Stone",
    jobRole: "Product Manager",
    joiningDate: "2023-01-15",
    status: "Approved",
  },
  {
    id: "LV-002",
    empId: "EMP-002",
    name: "Liam Johnson",
    jobRole: "UX Researcher",
    joiningDate: "2022-08-10",
    status: "Pending",
  },
  {
    id: "LV-003",
    empId: "EMP-003",
    name: "Sophia Turner",
    jobRole: "Frontend Developer",
    joiningDate: "2021-11-03",
    status: "Rejected",
  },
  {
    id: "LV-004",
    empId: "EMP-004",
    name: "Michael Brown",
    jobRole: "Backend Developer",
    joiningDate: "2020-05-22",
    status: "Approved",
  },
];

export default function LeavesList() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="w-full min-h-screen  p-4 md:p-8">
      <div className="max-w-7xl mx-auto border border-neutral-200 shadow-sm bg-white rounded-2xl shadow-sm p-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-clash-bold text-gray-800">
            Leave Requests
          </h1>
          <div className="search_div max-w-md border border-zinc-200  flex items-center px-3 py-2 gap-2 bg-[#f8f8f8] rounded-xl">
            <FiSearch />
            <input
              className="outline-none focus:ring-0"
              type="text"
              placeholder="Search"
            />
            <FiCommand />
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="py-3 px-4">Emp ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Job Role</th>
                <th className="py-3 px-4">Joining Date</th>
                <th className="py-3 px-4">Leave Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {LEAVES.map((leave) => (
                <tr
                  key={leave.id}
                  onClick={() => navigate(`/admin/leaves/${leave.id}`)}
                  className="border-b text-sm hover:bg-gray-50 transition cursor-pointer"
                >
                  <td className="py-3 px-4 font-medium text-gray-700">
                    {leave.empId}
                  </td>
                  <td className="py-3 px-4">{leave.name}</td>
                  <td className="py-3 px-4">{leave.jobRole}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {new Date(leave.joiningDate).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4">
                    <StatusBadge status={leave.status} />
                  </td>
                  <td
                    className="py-3 px-4 text-right relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === leave.id ? null : leave.id)
                      }
                      className="p-2 rounded-lg hover:bg-gray-100"
                    >
                      <MoreVertical className="h-4 w-4 text-gray-500" />
                    </button>

                    {openMenu === leave.id && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-lg z-50">
                        <button className="w-full px-4 py-2 text-left text-sm hover:bg-green-50 text-green-600">
                          Approve
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm hover:bg-red-50 text-red-600">
                          Reject
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm hover:bg-orange-50 text-orange-600">
                          Review
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Static UI only. API integration and actions will be added later.
        </p>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
