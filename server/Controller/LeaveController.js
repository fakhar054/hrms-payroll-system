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
  const { search } = req.query;
  try {
    const regex = search ? new RegExp(search, "i") : null;
    const leaves = await LeaveModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      ...(regex
        ? [
            {
              $match: {
                $or: [
                  { leaveType: regex },
                  { status: regex },
                  { reason: regex },
                  { "user.personalInfo.fullName": regex },
                  { "user.personalInfo.email": regex },
                ],
              },
            },
          ]
        : []),

      { $sort: { createdAt: -1 } },
      {
        $project: {
          leaveType: 1,
          startDate: 1,
          endDate: 1,
          reason: 1,
          comment: 1,
          status: 1,
          createdAt: 1,
          updatedAt: 1,
          user: {
            _id: 1,
            personalInfo: {
              fullName: 1,
              email: 1,
              empId: 1,
            },
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      leaves,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// export const showLeaves = async (req, res) => {
//   try {
//     const leaves = await LeaveModel.find()
//       .populate("user", "personalInfo")
//       .sort({ createdAt: -1 });
//     res.status(200).json({
//       success: true,
//       leaves,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

export const updateLeaveStatus = async (req, res) => {
  try {
    const { status, comment } = req.body;
    const leaveId = req.params.id;
    const leave = await LeaveModel.findById(leaveId);

    if (!leave) {
      return res.status(404).json({ message: "Leave not found" });
    }

    leave.status = status;
    leave.comment = comment || "";

    await leave.save();
    res.json({
      message: `Leave ${status} successfully`,
      leave,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
