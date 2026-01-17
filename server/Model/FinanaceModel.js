import mongoose, { mongo } from "mongoose";

const financeModel = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    basicSalary: { type: Number, required: true },

    allowances: [{ title: String, amount: Number }],
    deductions: [{ title: String, amount: Number }],

    tax: { type: Number, default: 0 },
    totalSalary: { type: Number, default: 0 },
    netSalary: { type: Number, default: 0 },

    status: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
  },
  { timestamps: true }
);
export default mongoose.model("financeModel", financeModel);
