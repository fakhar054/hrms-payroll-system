import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllLeaves } from "../../features/leaves/LeaveSlice";
import { useEffect, useState } from "react";
import { FiSearch, FiCommand } from "react-icons/fi";
import ActionDropdown from "../reusable ui/ActionDropdown";
import { updateLeaveStatus } from "../../features/leaves/LeaveSlice";
import { ToastContainer, toast } from "react-toastify";

export default function LeavesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(null);

  const { leaves, loading } = useSelector((state) => state.leave);

  useEffect(() => {
    dispatch(getAllLeaves());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  const approveLeave = async (leaveId) => {
    try {
      await dispatch(
        updateLeaveStatus({ id: leaveId, status: "approved" })
      ).unwrap();
      toast.success("Leave Approved");
    } catch (err) {
      console.error("Failed to approve leave:", err);
      toast.error("Failed to approve leave. Please try again.");
    }
  };

  const rejectLeave = async (leaveId) => {
    try {
      await dispatch(
        updateLeaveStatus({ id: leaveId, status: "rejected" })
      ).unwrap();
      toast.success("Leave Rejected");
    } catch (err) {
      console.error("Failed to reject leave:", err);
      toast.error("Failed to approve leave. Please try again.");
    }
  };

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
                    <td className="py-3 px-4 font-medium text-gray-700">
                      EMP-XXX
                    </td>

                    <td className="py-3 px-4">
                      {personalInfo?.fullName || "N/A"}
                    </td>

                    <td className="py-3 px-4">Software Engineer</td>

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

                    <td
                      className="py-3 px-4 text-right relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ActionDropdown
                        onApprove={() => approveLeave(leave._id)}
                        onReject={() => rejectLeave(leave._id)}
                        onReview={() => navigate(`/admin/leaves/${leave._id}`)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ToastContainer />
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
