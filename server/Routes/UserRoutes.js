import express from "express";
import {
  login,
  logout,
  registerUser,
  getMe,
  getAllusers,
} from "../Controller/UserController.js";
import getMeMiddleware from "../Middlewares/getMeMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/me", getMeMiddleware, getMe);
router.get("/logout", logout);

router.get("/all-users", getAllusers);

export default router;
