import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "components/reusable ui/PageHeader";

import { useNavigate } from "react-router";
import { fetchMyLeaves } from "../../features/leaves/myLeavesSlice";
import ApplyLeave from "../../components/reusable ui/ApplyLeave"
import {
  FiSearch,
  FiBell,
  FiMail,
  FiChevronRight,
  FiCommand,
} from "react-icons/fi";
import { Search, Filter, ArrowUpDown, MoreVertical } from "lucide-react";

const UserLeaves = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const { leaves, loading, error } = useSelector((state) => state.myLeaves);
  const user = useSelector((state) => state.auth.user);
  console.log(user)

  useEffect(() => {
    dispatch(fetchMyLeaves());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const feildStyle =
    "focus:outline-none  shadow-sm rounded-md px-4 py-2 w-full bg-white border border-neutral-300";

  return (
    <section className="p-4">
      <PageHeader />
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-6 border border-neutral-300 mt-[2vw]">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h1 className="text-2xl text-gray-800 font-clash-bold">My  Leaves</h1>
      
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
                  <button className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg text-sm shadow-sm text-black hover:bg-gray-50">
                    <Filter className="h-4 w-4 text-black" />
                    Filter
                  </button>
      
                  {/* SORT (UI ONLY) */}
                  <div>
                   <ApplyLeave />
                  </div>
                </div>
              </div>
      <div className="overflow-auto h-[70vh] font-clash-medium ">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-neutral-300">
              <th className="py-3 px-4">Emp ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Job Role</th>
              <th className="py-3 px-4">Joining Date</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {leaves.map((leave) => (
              <tr
                key={leave._id}
                onClick={() => navigate(`/leaves/${leave._id}`)}
                className="border-b border-neutral-300 text-sm hover:bg-gray-50 transition"
              >
                <td className="py-5 px-4 font-medium text-gray-700">
                  {user?.personalInfo.empid || "—"}
                </td>

                <td className="py-3 px-4">{user?.personalInfo?.fullName}</td>

                <td className="py-3 px-4">{user?.jobTitle || "—"}</td>

                <td className="py-3 px-4 text-gray-600">
                  {user?.personalInfo?.dateOfJoining
                    ? new Date(
                        user.personalInfo.dateOfJoining
                      ).toLocaleDateString()
                    : "—"}
                </td>

                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      leave.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : leave.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {leave.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      </div>
    </section>
  );
};

export default UserLeaves;
