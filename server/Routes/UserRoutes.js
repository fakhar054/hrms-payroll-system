import express from "express";
import {
  login,
  logout,
  registerUser,
  getMe,
  getAllusers,
  deletUser,
  updateUserByAdmin,
  getUserbyId,
} from "../Controller/UserController.js";
import getMeMiddleware from "../Middlewares/getMeMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/me", getMeMiddleware, getMe);
router.get("/logout", logout);

router.get("/all-users", getAllusers);
router.get("/get-userby-id/:id", getUserbyId);
router.patch("/admin/user/:id/deactivate", deletUser);
router.patch("/admin/update-users/:id", updateUserByAdmin);

export default router;
