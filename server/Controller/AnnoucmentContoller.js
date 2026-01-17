import AnnocementModel from "../Model/AnnocementModel.js";
import UserModel from "../Model/UserModel.js";
import NotificationModel from "../Model/NotificationModel.js";

export const annoucmentCon = async (req, res) => {
  try {
    const { title, message } = req.body;
    if (!title || !message) {
      return res.status(400).json({
        success: false,
        message: "title or message not found",
      });
    }

    const announcement = await AnnocementModel.create({
      title,
      message,
      createdBy: req.user.id,
    });

    const userName = await AnnocementModel.findById(announcement.id).populate(
      "createdBy"
    );

    const users = await UserModel.find({ userType: "employee" }).select("_id");
    // console.log("Users found:", users);

    const notifications = users.map((user) => ({
      userId: user._id,
      announcementId: announcement._id,
    }));

    await NotificationModel.insertMany(notifications);

    return res.status(201).json({
      success: true,
      message: "Announcement created successfully",
    });
  } catch (error) {
    console.error("Announcement Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while creating announcement",
    });
  }
};

export const getAllAnnoucment = async (req, res) => {
  const userId = req.user.id;
  console.log("User id in gett Annoucment: ", userId);

  try {
    const allAnnoucment = await AnnocementModel.find().populate(
      "createdBy",
      "personalInfo.fullName"
    );
    if (!allAnnoucment) {
      return res.status(401).json({ message: "Not found Any Annoucement" });
    }
    return res.status(201).json({ success: true, announcement: allAnnoucment });
  } catch (error) {
    console.log(error);
  }
};

// 1. Get notifications for the bell icon
export const getMyNotifications = async (req, res) => {
  try {
    const notifications = await NotificationModel.find({ userId: req.user.id })
      .populate("announcementId", "title") // Just get the title for the dropdown
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, notifications });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching notifications" });
  }
};

// 2. Mark one as read (When user clicks a specific notification)
export const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    await NotificationModel.findByIdAndUpdate(id, { isRead: true });
    res.status(200).json({ success: true, message: "Notification read" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const markAllAsRead = async (req, res) => {
  try {
    await NotificationModel.updateMany(
      { userId: req.user.id, isRead: false },
      { isRead: true }
    );
    res.status(200).json({ success: true, message: "All marked as read" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
