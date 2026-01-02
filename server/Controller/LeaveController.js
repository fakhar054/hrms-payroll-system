import LeaveModel from "../Model/LeaveModel.js";

export const applyLeave = async (req, res) => {
  try {
    const userId = req.user.id;
    const { leaveType, startDate, endDate, reason } = req.body;
    const leave = new LeaveModel({
      user: userId,
      leaveType,
      startDate,
      endDate,
      reason,
    });
    await leave.save();
    res.status(201).json({
      success: true,
      message: "Leave applied successfully",
      leave,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getMyLeaves = async (req, res) => {
  try {
    const userId = req.user.id;

    const leaves = await LeaveModel.find({ user: userId }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, leaves });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const showLeaves = async (req, res) => {
  try {
    const leaves = await LeaveModel.find()
      .populate("user", "personalInfo")
      .sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      leaves,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
