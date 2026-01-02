import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserModel = new mongoose.Schema(
  {
    personalInfo: {
      fullName: {
        type: String,
        required: true,
        trim: true,
      },
      fatherName: String,
      cnic: {
        type: String,
        unique: true,
        sparse: true,
      },
      dob: Date,
      gender: {
        type: String,
      },
      phone: String,
      email: {
        type: String,
        required: true,
        unique: true,
      },
      address: String,
      currentAddress: String,
      permanentAddress: String,
      dateOfJoining: Date,
      maritalStatus: {
        type: String,
        default: "Single",
      },
      religion: {
        type: String,
        default: "Muslim",
      },
      education: String,
      workExperience: String,
    },

    bankInfo: {
      bankName: String,
      accountTitle: String,
      accountNumber: String,
      iban: String,
      branchName: String,
    },
    emergencyContact: {
      name: String,
      relation: String,
      phone: String,
      address: String,
    },

    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      enum: ["super-admin", "admin", "employee"],
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

UserModel.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserModel);
export default User;
