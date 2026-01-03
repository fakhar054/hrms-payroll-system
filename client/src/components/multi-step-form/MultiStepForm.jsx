





import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ProgressBar from "./ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authThunks";
import { Navigate, useNavigate } from "react-router";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const initialState = {
    fullName: "",
    fatherName: "",
    cnic: "",
    empId: "",
    email: "",
    password: "",
    currentAddress: "",
    permanentAddress: "",
    dob: "",
    phone: "",
    dateOfJoining: "",
    maritalStatus: "",
    religion: "",
    education: "",
    workExperience: "",

    department: "",
    userType: "",
    jobTitle: "",
    basicSalary: "",
    otherAllowance: "",
    netSalary: "",

    accountTitle: "",
    accountNumber: "",
    bankName: "",
    branchName: "",

    contactPersonName: "",
    homeAddress: "",
    mobileNumber: "",
    relationship: "",
    alternativeNumber: "",
  };

  const [formData, setFormData] = useState(initialState);

  const onlyText = /^[A-Za-z\s]+$/;
  const onlyNumber = /^[0-9]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validateStep = (currentStep) => {
    let newErrors = {};

   
     if (currentStep === 1) {
  if (!formData.fullName)
    newErrors.fullName = "Full name is required";
  else if (!onlyText.test(formData.fullName))
    newErrors.fullName = "Only alphabets allowed";

  if (!formData.fatherName)
    newErrors.fatherName = "Father name is required";
  else if (!onlyText.test(formData.fatherName))
    newErrors.fatherName = "Only alphabets allowed";

  if (!formData.cnic)
    newErrors.cnic = "CNIC is required";
  else if (!onlyNumber.test(formData.cnic) || formData.cnic.length < 10)
    newErrors.cnic = "CNIC must be at least 10 digits";

  if (!formData.empId)
    newErrors.empId = "Employee ID is required";

  if (!formData.email)
    newErrors.email = "Email is required";
  else if (!emailRegex.test(formData.email))
    newErrors.email = "Invalid email format";

  if (!formData.password)
    newErrors.password = "Password is required";
  else if (!passwordRegex.test(formData.password))
    newErrors.password = "Min 8 chars, letters + numbers";

  

  

  if (!formData.currentAddress)
    newErrors.currentAddress = "Required";

  if (!formData.permanentAddress)
    newErrors.permanentAddress = "Required";

  if (!formData.dob)
    newErrors.dob = "Required";

  if (!formData.phone)
    newErrors.phone = "Phone is required";
  else if (!onlyNumber.test(formData.phone) || formData.phone.length < 10)
    newErrors.phone = "Invalid phone number";

  if (!formData.dateOfJoining)
    newErrors.dateOfJoining = "Required";

  if (!formData.maritalStatus)
    newErrors.maritalStatus = "Required";

  if (!formData.education)
    newErrors.education = "Required";

  if (!formData.religion)
    newErrors.religion = "Required";

  if (formData.workExperience && !onlyNumber.test(formData.workExperience))
    newErrors.workExperience = "Numbers only";

  console.log("STEP 1 ERRORS:", newErrors);
}
    

    if (currentStep === 2) {
      if (!formData.department) newErrors.department = "Required";
      if (!formData.userType) newErrors.userType = "Required";
      if (!formData.jobTitle) newErrors.jobTitle = "Required";
      if (!onlyNumber.test(formData.basicSalary))
        newErrors.basicSalary = "Numbers only";
      if (!onlyNumber.test(formData.otherAllowance))
        newErrors.otherAllowance = "Numbers only";
      if (!onlyNumber.test(formData.netSalary))
        newErrors.netSalary = "Numbers only";
    }

    if (currentStep === 3) {
      if (!formData.accountTitle) newErrors.accountTitle = "Required";
      if (!formData.accountNumber) newErrors.accountNumber = "Required";
      if (!formData.bankName) newErrors.bankName = "Required";
      if (!formData.branchName) newErrors.branch = "Required";
    }

    if (currentStep === 4) {
      if (!formData.contactPersonName) newErrors.contactPersonName = "Required";
      if (!formData.homeAddress) newErrors.homeAddress = "Required";
      if (!onlyNumber.test(formData.mobileNumber))
        newErrors.mobileNumber = "Numbers only";
      if (!formData.relationship) newErrors.relationship = "Required";
      if (!onlyNumber.test(formData.alternativeNumber))
        newErrors.alternativeNumber = "Numbers only";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
  const isValid = validateStep(step);

  if (!isValid) {
    console.log("Validation failed for step:", step);
    return;
  }

  setStep((prev) => prev + 1);
};
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
    const res = await dispatch(registerUser(formData)).unwrap();

    console.log("Registered user:", res);

    // Example: redirect
    navigate("/admin"); // or "/login"

  } catch (err) {
    console.error("Registration failed:", err);
  }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProgressBar currentStep={step} />

      {step === 1 && <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} errors={errors} />}
      {step === 2 && <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} errors={errors} />}
      {step === 3 && <Step3 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} errors={errors} />}
      {step === 4 && <Step4 formData={formData} handleChange={handleChange} prevStep={prevStep} errors={errors} />}
    </form>
  );
}
