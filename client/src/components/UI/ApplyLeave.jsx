import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { applyLeave } from "@/features/leaves/LeaveSlice";

const ApplyLeave = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.leave);

  const [visible, setVisible] = useState(false);
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
      setVisible(false);
      setFormData({
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      });
    }
  };

  const fieldStyle =
    "focus:outline-none rounded-md px-4 py-2 w-full bg-white border border-neutral-300 shadow-sm";

  return (
    <>
      {/* Trigger Button */}
      <Button
        label="Apply Leave"
        icon="pi pi-plus"
        onClick={() => setVisible(true)}
        className="border border-neutral-300 bg-white text-black shadow-sm"
      />

      {/* Modal */}
      <Dialog
        header="Apply Leave"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "45vw" }}
        modal
        draggable={false}
        className="backdrop-blur-md"
        contentClassName="border border-neutral-300 rounded-xl shadow-xl bg-white"
      >
        <form onSubmit={handleSubmit} className="space-y-4 p-2">
          {/* Leave Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Leave Type
            </label>
            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              required
              className={fieldStyle}
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
            <label className="block text-sm font-medium mb-1">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className={fieldStyle}
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className={fieldStyle}
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Reason
            </label>
            <textarea
              name="reason"
              rows="3"
              value={formData.reason}
              onChange={handleChange}
              required
              className={fieldStyle}
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">
              {error.message || "Something went wrong"}
            </p>
          )}

          {/* Submit */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 rounded-md border border-neutral-300 bg-white shadow-sm
                         transition-all hover:shadow-md hover:-translate-y-[1px]"
            >
              {loading ? "Applying..." : "Apply Leave"}
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default ApplyLeave;
