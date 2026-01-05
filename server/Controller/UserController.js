import UserModel from "../Model/UserModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../Utils/token.js";

export const registerUser = async (req, res) => {
  try {
    const data = req.body;

    const user = new UserModel({
      password: data.password,
      userType: data.userType,

      personalInfo: {
        fullName: data.fullName,
        fatherName: data.fatherName,
        cnic: data.cnic,
        dob: data.dob,
        gender: data.gender,
        phone: data.phone,
        email: data.email,
        currentAddress: data.currentAddress,
        permanentAddress: data.permanentAddress,
        dateOfJoining: data.dateOfJoining,
        maritalStatus: data.maritalStatus,
        religion: data.religion,
        education: data.education,
        workExperience: data.workExperience,
        empId: data.empId,
        jobRole: data.jobRole,
      },

      bankInfo: {
        bankName: data.bankName,
        accountTitle: data.accountTitle,
        accountNumber: data.accountNumber,
        iban: data.iban,
        branchName: data.branchName,
      },

      emergencyContact: {
        name: data.contactPersonName,
        relation: data.relationship,
        phone: data.mobileNumber,
        address: data.homeAddress,
      },
    });

    await user.save();

    res.status(201).json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ "personalInfo.email": email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    generateToken(res, user);
    const userData = user.toObject();
    delete userData.password;

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: userData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getMe = async (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      sameSite: "none",
      secure: true,
      path: "/",
    });

    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getAllusers = async (req, res) => {
  const { search } = req.query;
  console.log("EMP ID: ", search);
  try {
    let query = {};
    if (search && search.trim() !== "") {
      const searchRegex = new RegExp(search.trim(), "i");
      query = { "personalInfo.empId": { $regex: searchRegex } };
    }

    const users = await UserModel.find(query).select("-password");
    res.status(200).json({
      status: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

// export const getAllusers = async (req, res) => {
//   try {
//     const users = await UserModel.find().select("-password");
//     res.status(200).json({
//       status: true,
//       count: users.length,
//       data: users,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch users",
//       error: error.message,
//     });
//   }
// };

export const deletUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      res.status(401).json({ message: "User not Found" });
    }
    if (!user.isActive) {
      return res.status(400).json({ message: "User already deactivated" });
    }
    user.isActive = false;
    await user.save();
    return res.status(200).json({
      message: "User deactivated successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export const updateUserByAdmin = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("user id: ", userId);

    const protectedFields = [
      "_id",
      "password",
      "createdAt",
      "updatedAt",
      "__v",
    ];

    protectedFields.forEach((field) => delete req.body[field]);

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const forgotPassword = async (req, res) => {};
