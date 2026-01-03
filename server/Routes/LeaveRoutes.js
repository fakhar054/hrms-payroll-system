import express from "express";
import {
  applyLeave,
  getMyLeaves,
  showLeaves,
  updateLeaveStatus,
} from "../Controller/LeaveController.js";
import authMiddleware from "../Middlewares/authMiddleware.js";

const leaveRouter = express.Router();

leaveRouter.post("/leaveapply", authMiddleware, applyLeave);
leaveRouter.get("/my-leaves", authMiddleware, getMyLeaves);
leaveRouter.get("/admin/all-leaves", showLeaves);

leaveRouter.patch("/admin/leave/:id", updateLeaveStatus);

export default leaveRouter;
