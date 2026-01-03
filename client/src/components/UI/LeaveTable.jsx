import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllLeaves } from "../../features/leaves/LeaveSlice";
import { useEffect, useState } from "react";
import { FiSearch, FiCommand } from "react-icons/fi";

export default function LeavesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(null);

  const { leaves, loading } = useSelector((state) => state.leave);

  useEffect(() => {
    dispatch(getAllLeaves());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto border border-neutral-200 bg-white rounded-2xl shadow-sm p-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-clash-bold text-gray-800">
            Leave Requests
          </h1>

          <div className="max-w-md border flex items-center px-3 py-2 gap-2 bg-[#f8f8f8] rounded-xl">
            <FiSearch />
            <input
              className="outline-none bg-transparent"
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
              {leaves?.map((leave) => {
                const personalInfo = leave?.user?.personalInfo;

                return (
                  <tr
                    key={leave._id}
                    onClick={() => navigate(`/admin/leaves/${leave._id}`)}
                    className="border-b text-sm hover:bg-gray-50 transition cursor-pointer"
                  >
                    {/* EMP ID (STATIC) */}
                    <td className="py-3 px-4 font-medium text-gray-700">
                      EMP-XXX
                    </td>

                    {/* NAME */}
                    <td className="py-3 px-4">
                      {personalInfo?.fullName || "N/A"}
                    </td>

                    {/* JOB ROLE (STATIC) */}
                    <td className="py-3 px-4">
                      Software Engineer
                    </td>

                    {/* JOINING DATE */}
                    <td className="py-3 px-4 text-gray-600">
                      {personalInfo?.dateOfJoining
                        ? new Date(
                            personalInfo.dateOfJoining
                          ).toLocaleDateString()
                        : "N/A"}
                    </td>

                    {/* STATUS */}
                    <td className="py-3 px-4">
                      <StatusBadge status={leave.status} />
                    </td>

                    {/* ACTION */}
                    <td
                      className="py-3 px-4 text-right relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() =>
                          setOpenMenu(openMenu === leave._id ? null : leave._id)
                        }
                        className="p-2 rounded-lg hover:bg-gray-100"
                      >
                        <MoreVertical className="h-4 w-4 text-gray-500" />
                      </button>

                      {openMenu === leave._id && (
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
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Data loaded from API via Redux Toolkit.
        </p>
      </div>
    </div>
  );
}

/* ---------- STATUS BADGE ---------- */
function StatusBadge({ status }) {
  const styles = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}
