// import React, { useState } from "react";
// import { Dialog } from "primereact/dialog";
// import { Button } from "primereact/button";
// import { useDispatch, useSelector } from "react-redux";
// import { applyLeave } from "@/features/leaves/LeaveSlice";

// const ApplyLeave = () => {
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.leave);

//   const [visible, setVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     leaveType: "",
//     startDate: "",
//     endDate: "",
//     reason: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const result = await dispatch(applyLeave(formData));

//     if (applyLeave.fulfilled.match(result)) {
//       setVisible(false);
//       setFormData({
//         leaveType: "",
//         startDate: "",
//         endDate: "",
//         reason: "",
//       });
//     }
//   };

//   const fieldStyle =
//     "focus:outline-none rounded-md px-4 py-2 w-full bg-white border border-neutral-300 shadow-sm";

//   return (
//     <>
//       {/* Trigger Button */}
//       <Button
//         label="Apply Leave"
//         icon="pi pi-plus"
//         onClick={() => setVisible(true)}
//         className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50"
//       />

//       {/* Modal */}
//       <Dialog
//         header="Apply Leave"
//         visible={visible}
//         onHide={() => setVisible(false)}
//         style={{ width: "45vw" }}
//         modal
//         draggable={false}
//         className="border border-neutral-400 rounded-xl m-20 bg-blue-400"
//         contentClassName="border border-neutral-300 rounded-xl shadow-xl bg-white"
//       >
//         <form onSubmit={handleSubmit} className="space-y-4 p-2">
//           {/* Leave Type */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Leave Type
//             </label>
//             <select
//               name="leaveType"
//               value={formData.leaveType}
//               onChange={handleChange}
//               required
//               className={fieldStyle}
//             >
//               <option value="">Select Leave Type</option>
//               <option value="Sick">Sick</option>
//               <option value="Casual">Casual</option>
//               <option value="Annual">Annual</option>
//               <option value="Unpaid">Unpaid</option>
//             </select>
//           </div>

//           {/* Start Date */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Start Date
//             </label>
//             <input
//               type="date"
//               name="startDate"
//               value={formData.startDate}
//               onChange={handleChange}
//               required
//               className={fieldStyle}
//             />
//           </div>

//           {/* End Date */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               End Date
//             </label>
//             <input
//               type="date"
//               name="endDate"
//               value={formData.endDate}
//               onChange={handleChange}
//               required
//               className={fieldStyle}
//             />
//           </div>

//           {/* Reason */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Reason
//             </label>
//             <textarea
//               name="reason"
//               rows="3"
//               value={formData.reason}
//               onChange={handleChange}
//               required
//               className={fieldStyle}
//             />
//           </div>

//           {error && (
//             <p className="text-sm text-red-500">
//               {error.message || "Something went wrong"}
//             </p>
//           )}

//           {/* Submit */}
//           <div className="flex justify-end pt-2">
//             <button
//               type="submit"
//               disabled={loading}
//               className="px-6 py-2 rounded-md border border-neutral-300 bg-white shadow-sm
//                          transition-all hover:shadow-md hover:-translate-y-[1px]"
//             >
//               {loading ? "Applying..." : "Apply Leave"}
//             </button>
//           </div>
//         </form>
//       </Dialog>
//     </>
//   );
// };

// export default ApplyLeave;





import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyLeave } from "@/features/leaves/LeaveSlice";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

const ApplyLeave = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.leave);

  const [formData, setFormData] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e, closeDialog) => {
    e.preventDefault();

    const result = await dispatch(applyLeave(formData));

    if (applyLeave.fulfilled.match(result)) {
      setFormData({
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      });
      closeDialog(); // close modal
    }
  };

  const fieldStyle =
    "w-full font-clash-medium rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-400";

  return (
    <Dialog>
      {/* ===== Trigger Button ===== */}
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 border-neutral-300 shadow-sm font-clash-medium"
        >
          Apply Leave
        </Button>
      </DialogTrigger>

      {/* ===== Dialog Content ===== */}
      <DialogContent
        className="
          border border-neutral-300
          shadow-xl
          backdrop-blur-sm
          sm:max-w-lg
        "
      >
        <DialogHeader>
          <DialogTitle>Apply Leave</DialogTitle>
          <DialogDescription>
            Fill the form below to submit a leave request.
          </DialogDescription>
        </DialogHeader>

        {/* ===== Form ===== */}
        <form
          onSubmit={(e) =>
            handleSubmit(e, () =>
              document.querySelector("[data-slot='dialog-close']")?.click()
            )
          }
          className="space-y-4"
        >
          {/* Leave Type */}
          <div>
            <label className="text-sm font-medium mb-1 block">
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
            <label className="text-sm font-medium mb-1 block">
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
            <label className="text-sm font-medium mb-1 block">
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
            <label className="text-sm font-medium mb-1 block">
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

          {/* Footer */}
          <DialogFooter className="pt-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit" disabled={loading}>
              {loading ? "Applying..." : "Apply Leave"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyLeave;
