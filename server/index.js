import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/UserRoutes.js";
import connectDB from "./Config/db.js";
import leaveRouter from "./Routes/LeaveRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;
connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", router);
app.use("/api/leave", leaveRouter);

app.get("/", (req, res) => {
  res.send("Hello, Server is running!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
