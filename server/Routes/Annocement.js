import express from "express";
import {
  annoucmentCon,
  getAllAnnoucment,
  getMyNotifications,
  markAllAsRead,
  markAsRead,
} from "../Controller/AnnoucmentContoller.js";
import { addtoPayroll, updatePay } from "../Controller/FinanaceController.js";
import authMiddleware from "../Middlewares/authMiddleware.js";

const annoucementRouter = express.Router();

annoucementRouter.post("/create-annoucement", authMiddleware, annoucmentCon);
annoucementRouter.get("/get-all-annoucment", authMiddleware, getAllAnnoucment);

annoucementRouter.post("/add-to-payroll", addtoPayroll);
annoucementRouter.patch("/update-pay/:id", updatePay);

// Notification Routes (New)
annoucementRouter.get("/my-notifications", authMiddleware, getMyNotifications);
annoucementRouter.patch("/read/:id", authMiddleware, markAsRead);
annoucementRouter.patch("/read-all", authMiddleware, markAllAsRead);

export default annoucementRouter;
