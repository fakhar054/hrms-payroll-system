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
        address: data.address,
        currentAddress: data.currentAddress,
        permanentAddress: data.permanentAddress,
        dateOfJoining: data.dateOfJoining,
        maritalStatus: data.maritalStatus,
        religion: data.religion,
        education: data.education,
        workExperience: data.workExperience,
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
  try {
    const users = await UserModel.find().select("-password");
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

export const forgotPassword = async (req, res) => {};
