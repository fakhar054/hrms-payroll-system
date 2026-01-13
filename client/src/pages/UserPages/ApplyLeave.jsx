import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyLeave } from "@/features/leaves/LeaveSlice";
import PageHeader from "components/reusable ui/PageHeader";

const ApplyLeave = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.leave);

  const [formData, setFormData] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(applyLeave(formData));

    if (applyLeave.fulfilled.match(result)) {
      alert("Leave applied successfully ✅");
      setFormData({
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      });
    }
  };

  const feildStyle =
    "focus:outline-none  shadow-sm rounded-md px-4 py-2 w-full bg-white border border-neutral-300";

  return (
    <section className="p-4">
        <PageHeader />
      <div className=" m-8 p-8 bg-white rounded-2xl shadow-sm border border-neutral-300 flex flex-col font-clash-medium">
        <h2 className="text-2xl font-semibold mb-8">Apply Leave</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={user?.name || ""}
              disabled
              className={`${feildStyle}`}
            />
          </div>

          {/* Employee ID */}
          <div>
            <label className="block text-sm font-medium">Employee ID</label>
            <input
              type="text"
              value={user?.empId || ""}
              disabled
              className={`${feildStyle}`}
            />
          </div>

          {/* Leave Type */}
          <div>
            <label className="block text-sm font-medium">Leave Type</label>
            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              required
              className={`${feildStyle}`}
            >
              <option value="">Select Leave Type</option>
              <option value="Sick">Sick</option>
              <option value="Casual">Casual</option>
              <option value="Annual">Annual</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className={`${feildStyle}`}
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className={`${feildStyle}`}
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium">Reason</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              rows="3"
              className={`${feildStyle}`}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error.message || "Something went wrong"}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group flex items-center gap-2 px-6 py-2 rounded-md border-2 border-neutral-300
                        bg-white shadow-sm transition-all duration-300 ease-in-out
                        hover:shadow-md hover:-translate-y-[1px]"
          >
            {loading ? "Applying..." : "Apply Leave"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ApplyLeave;
