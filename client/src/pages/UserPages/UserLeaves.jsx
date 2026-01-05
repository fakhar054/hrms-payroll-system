import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "components/UI/PageHeader";
import ApplyLeave from "components/UI/ApplyLeave";
import { useNavigate } from "react-router";
import { fetchMyLeaves } from "../../features/leaves/myLeavesSlice";

const UserLeaves = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { leaves, loading, error } = useSelector((state) => state.myLeaves);
  const user = useSelector((state) => state.auth.user);

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
        <div className="w-full overflow-x-auto">
  <table className="w-full border-collapse bg-white rounded-2xl shadow-sm border border-neutral-200">
    <thead>
      <tr className="text-left text-sm text-gray-500 border-b">
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
          className="border-b text-sm hover:bg-gray-50 transition cursor-pointer"
        >
          <td className="py-3 px-4 font-medium text-gray-700">
            {user?.employeeId || "—"}
          </td>

          <td className="py-3 px-4">
            {user?.personalInfo?.fullName}
          </td>

          <td className="py-3 px-4">
            {user?.jobTitle || "—"}
          </td>

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

      <div>
        <ApplyLeave />
      </div>
    </section>
  );
};

export default UserLeaves;
