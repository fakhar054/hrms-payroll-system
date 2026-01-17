import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import PageHeader from "components/reusable ui/PageHeader";
import { IoMdSend } from "react-icons/io";
import { getUserById, updateUser } from "features/users/userThunk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MultiStepForm() {
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, action } = useParams();
  console.log("id: ", id);

  const [mode, setMode] = useState();
  const { selectedUser, loading, error } = useSelector((state) => state.users);

  
  useEffect(() => {
    console.log("DISPATCHING getUserById with id:", id);
    if (id) {
      dispatch(getUserById({ userId: id }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (action) {
      setMode(action);
    }
  }, [action]);

  const isReview = mode == "view";
  const isEdit = mode == "edit";

  const inputDisabled = isReview;

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
    jobRole: "",
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

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        fullName: selectedUser.personalInfo?.fullName || "",
        fatherName: selectedUser.personalInfo?.fatherName || "",
        cnic: selectedUser.personalInfo?.cnic || "",
        empId: selectedUser.personalInfo?.empId || "",
        email: selectedUser.personalInfo?.email || "",
        password: "", // leave blank
        currentAddress: selectedUser.personalInfo?.currentAddress || "",
        permanentAddress: selectedUser.personalInfo?.permanentAddress || "",
        dob: selectedUser.personalInfo?.dob || "",
        phone: selectedUser.personalInfo?.phone || "",
        dateOfJoining: selectedUser.personalInfo?.dateOfJoining || "",
        maritalStatus: selectedUser.personalInfo?.maritalStatus || "",
        religion: selectedUser.personalInfo?.religion || "",
        education: selectedUser.personalInfo?.education || "",
        workExperience: selectedUser.personalInfo?.workExperience || "",
        department: selectedUser.jobInfo?.department || "",
        userType: selectedUser.userType || "",
        jobRole: selectedUser.jobInfo?.jobRole || "",
        basicSalary: selectedUser.jobInfo?.basicSalary || "",
        otherAllowance: selectedUser.jobInfo?.otherAllowance || "",
        netSalary: selectedUser.jobInfo?.netSalary || "",
        accountTitle: selectedUser.bankInfo?.accountTitle || "",
        accountNumber: selectedUser.bankInfo?.accountNumber || "",
        bankName: selectedUser.bankInfo?.bankName || "",
        branchName: selectedUser.bankInfo?.branchName || "",
        contactPersonName:
          selectedUser.emergencyContact?.contactPersonName || "",
        homeAddress: selectedUser.emergencyContact?.homeAddress || "",
        mobileNumber: selectedUser.emergencyContact?.mobileNumber || "",
        relationship: selectedUser.emergencyContact?.relationship || "",
        alternativeNumber:
          selectedUser.emergencyContact?.alternativeNumber || "",
      });
    }
  }, [selectedUser]);

  const onlyText = /^[A-Za-z\s]+$/;
  const onlyNumber = /^[0-9]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required";
    else if (!onlyText.test(formData.fullName))
      newErrors.fullName = "Only alphabets allowed";
    if (!formData.fatherName) newErrors.fatherName = "Father name is required";
    else if (!onlyText.test(formData.fatherName))
      newErrors.fatherName = "Only alphabets allowed";
    if (!formData.cnic) newErrors.cnic = "CNIC is required";
    else if (!onlyNumber.test(formData.cnic) || formData.cnic.length < 10)
      newErrors.cnic = "CNIC must be at least 10 digits";
    if (!formData.empId) newErrors.empId = "Employee ID is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(formData.password))
      newErrors.password = "Min 8 chars, letters + numbers";
    if (!formData.currentAddress) newErrors.currentAddress = "Required";
    if (!formData.permanentAddress) newErrors.permanentAddress = "Required";
    if (!formData.dob) newErrors.dob = "Required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!onlyNumber.test(formData.phone) || formData.phone.length < 10)
      newErrors.phone = "Invalid phone number";
    if (!formData.dateOfJoining) newErrors.dateOfJoining = "Required";
    if (!formData.maritalStatus) newErrors.maritalStatus = "Required";
    if (!formData.education) newErrors.education = "Required";
    if (!formData.religion) newErrors.religion = "Required";

    if (!formData.department) newErrors.department = "Required";
    if (!formData.userType) newErrors.userType = "Required";
    if (!formData.jobRole) newErrors.jobRole = "Required";
    if (!onlyNumber.test(formData.basicSalary))
      newErrors.basicSalary = "Numbers only";
    if (!onlyNumber.test(formData.otherAllowance))
      newErrors.otherAllowance = "Numbers only";
    if (!onlyNumber.test(formData.netSalary))
      newErrors.netSalary = "Numbers only";
    if (!formData.accountTitle) newErrors.accountTitle = "Required";
    if (!formData.accountNumber) newErrors.accountNumber = "Required";
    if (!formData.bankName) newErrors.bankName = "Required";
    if (!formData.branchName) newErrors.branchName = "Required";
    if (!formData.contactPersonName) newErrors.contactPersonName = "Required";
    if (!formData.homeAddress) newErrors.homeAddress = "Required";
    if (!onlyNumber.test(formData.mobileNumber))
      newErrors.mobileNumber = "Numbers only";
    if (!formData.relationship) newErrors.relationship = "Required";
    if (!onlyNumber.test(formData.alternativeNumber))
      newErrors.alternativeNumber = "Numbers only";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Handle submit is clicked");
    if (isReview) return;
    if (!selectedUser || !selectedUser._id) {
      console.error("No user selected for update!");
      return;
    }

    dispatch(updateUser({ userId: selectedUser._id, formData }))
      .unwrap()
      .then(() => {
        toast.success("User updated successfully!");
      })
      .catch((err) => {
        toast.error(err.message || "Failed to update user");
      });
  };

  const feildStyle =
    "focus:outline-none  shadow-sm rounded-md px-4 py-2 w-full bg-white border border-neutral-300";

  if (loading) {
    return <h1>I am loading</h1>;
  }

  console.log("Selected User: ", selectedUser);
  // console.log("mode: ", action);

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4">
        <PageHeader />
        <div className="mt-[4vw] max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-6 border border-neutral-200  ">
          <h1 className="text-2xl font-clash-bold mb-6">
            {isReview && "Review Employee"}
            {isEdit && "Edit Employee"}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                className="color_green block text-sm font-medium mb-1"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                onChange={handleChange}
                value={formData.fullName}
                // value={selectedUser?.personalInfo?.fullName}
                disabled={inputDisabled}
                placeholder="David Joe"
                className={`${feildStyle}`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="fatherName"
              >
                Father Name
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={formData.fatherName}
                name="fatherName"
                placeholder="Joe Root"
                disabled={inputDisabled}
                id="fatherName"
                className={`${feildStyle}`}
              />
              {errors.fatherName && (
                <p className="text-red-500 text-xs mt-1">{errors.fatherName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="cnic">
                CNIC No.
              </label>
              <input
                type="string"
                name="cnic"
                id="cnic"
                disabled={inputDisabled}
                placeholder="123456789"
                onChange={handleChange}
                value={formData.cnic}
                className={`${feildStyle}`}
              />
              {errors.cnic && (
                <p className="text-red-500 text-xs mt-1">{errors.cnic}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="empId">
                Employee ID
              </label>
              <input
                type="text"
                name="empId"
                id="empId"
                disabled={inputDisabled}
                placeholder="EMP-001"
                onChange={handleChange}
                value={formData.empId}
                className={`${feildStyle}`}
              />
              {errors.empId && (
                <p className="text-red-500 text-xs mt-1">{errors.empId}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                disabled={inputDisabled}
                placeholder="joeroot@gmail.com"
                onChange={handleChange}
                value={formData.email}
                className={`${feildStyle}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="currentAdrees"
              >
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                disabled={inputDisabled}
                onChange={handleChange}
                placeholder="Password"
                value={formData.password}
                className={`${feildStyle}`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="currentAddress"
              >
                Current Address
              </label>
              <input
                type="text"
                name="currentAddress"
                id="currentAddress"
                disabled={inputDisabled}
                onChange={handleChange}
                placeholder="Current Adress"
                value={formData.currentAddress}
                className={`${feildStyle}`}
              />
              {errors.currentAddress && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.currentAddress}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="permanentAddress"
              >
                Permanent Address
              </label>
              <input
                type="text"
                name="permanentAddress"
                id="permanentAddress"
                disabled={inputDisabled}
                placeholder="Permanent Adress"
                value={formData.permanentAddress}
                onChange={handleChange}
                className={`${feildStyle}`}
              />
              {errors.permanentAddress && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.permanentAddress}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="dob">
                D.O.B
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                disabled={inputDisabled}
                onChange={handleChange}
                value={formData.dob}
                className={`${feildStyle}`}
              />
              {errors.dob && (
                <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Mobile Tel
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                disabled={inputDisabled}
                placeholder="03001234567"
                onChange={handleChange}
                value={formData.phone}
                className={`${feildStyle}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="dateOfJoining"
              >
                Date of Joining
              </label>
              <input
                type="date"
                name="dateOfJoining"
                id="dateOfJoining"
                disabled={inputDisabled}
                onChange={handleChange}
                value={formData.dateOfJoining}
                className={`${feildStyle}`}
              />
              {errors.dateOfJoining && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dateOfJoining}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="matarialStatus"
              >
                Matarial Status
              </label>
              <select
                name="maritalStatus"
                id="maritalStatus"
                disabled={inputDisabled}
                onChange={handleChange}
                value={formData.maritalStatus}
                className={`${feildStyle}`}
              >
                <option value="">Select marital status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="widow">Widow</option>
              </select>
              {errors.maritalStatus && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.maritalStatus}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="religion"
              >
                Religion
              </label>
              <select
                name="religion"
                id="religion"
                disabled={inputDisabled}
                onChange={handleChange}
                value={formData.religion}
                className={`${feildStyle}`}
              >
                <option>Select Religion</option>
                <option value="islam">Islam</option>
                <option value="other">other</option>
              </select>
              {errors.religion && (
                <p className="text-red-500 text-xs mt-1">{errors.religion}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="education"
              >
                Education
              </label>
              <input
                type="text"
                name="education"
                id="education"
                disabled={inputDisabled}
                placeholder="Bachelors / Masters"
                onChange={handleChange}
                value={formData.education}
                className={`${feildStyle}`}
              />
              {errors.education && (
                <p className="text-red-500 text-xs mt-1">{errors.education}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="workExperience"
              >
                Work Experience
              </label>
              <input
                type="text"
                name="workExperience"
                id="workExperience"
                placeholder="2"
                disabled={inputDisabled}
                onChange={handleChange}
                value={formData.workExperience}
                className={`${feildStyle}`}
              />
              {errors.workExperience && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.workExperience}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="department"
              >
                Department
              </label>
              <input
                type="text"
                name="department"
                id="department"
                disabled={inputDisabled}
                placeholder="Department"
                onChange={handleChange}
                value={formData.department}
                className={`${feildStyle}`}
              />
              {errors.department && (
                <p className="text-red-500 text-xs mt-1">{errors.department}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="userType"
              >
                User Type
              </label>
              <select
                name="userType"
                id="userType"
                disabled={inputDisabled}
                onChange={handleChange}
                value={formData.userType}
                className={`${feildStyle}`}
              >
                <option value="">Select UserType</option>
                <option value="employee">employee</option>
                <option value="admin">admin</option>
                <option value="super-admin">super-admin</option>
              </select>
              {errors.userType && (
                <p className="text-red-500 text-xs mt-1">{errors.userType}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="jobRole"
              >
                Job Title
              </label>
              <input
                type="text"
                name="jobRole"
                id="jobRole"
                disabled={inputDisabled}
                placeholder="Job Title"
                onChange={handleChange}
                value={formData.jobRole}
                className={`${feildStyle}`}
              />
              {errors.jobRole && (
                <p className="text-red-500 text-xs mt-1">{errors.jobRole}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="basicSalary"
              >
                Basic Salary
              </label>
              <input
                type="number"
                name="basicSalary"
                id="basicSalary"
                disabled={inputDisabled}
                placeholder="Basic Salary"
                onChange={handleChange}
                value={formData.basicSalary}
                className={`${feildStyle}`}
              />
              {errors.basicSalary && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.basicSalary}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="otherAllowance"
              >
                Other Allowance
              </label>
              <input
                type="number"
                name="otherAllowance"
                id="otherAllowance"
                disabled={inputDisabled}
                placeholder="Other Allowance"
                onChange={handleChange}
                value={formData.otherAllowance}
                className={`${feildStyle}`}
              />
              {errors.otherAllowance && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.otherAllowance}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="netSalary"
              >
                Net Salary
              </label>
              <input
                type="number"
                name="netSalary"
                id="netSalary"
                disabled={inputDisabled}
                placeholder="Net Salary"
                onChange={handleChange}
                value={formData.netSalary}
                className={`${feildStyle}`}
              />
              {errors.netSalary && (
                <p className="text-red-500 text-xs mt-1">{errors.netSalary}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="accountTitle"
              >
                Account Title
              </label>
              <input
                type="text"
                name="accountTitle"
                id="accountTitle"
                disabled={inputDisabled}
                placeholder="Account Title"
                onChange={handleChange}
                value={formData.accountTitle}
                className={`${feildStyle}`}
              />
              {errors.accountTitle && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.accountTitle}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="accountNumber"
              >
                Account Number
              </label>
              <input
                type="text"
                name="accountNumber"
                id="accountNumber"
                disabled={inputDisabled}
                placeholder="Account Number"
                onChange={handleChange}
                value={formData.accountNumber}
                className={`${feildStyle}`}
              />
              {errors.accountNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.accountNumber}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="bankName"
              >
                Bank Name
              </label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                disabled={inputDisabled}
                placeholder="Bank Name"
                onChange={handleChange}
                value={formData.bankName}
                className={`${feildStyle}`}
              />
              {errors.bankName && (
                <p className="text-red-500 text-xs mt-1">{errors.bankName}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="branch"
              >
                Branch Name
              </label>
              <input
                type="text"
                name="branchName"
                id="branchName"
                disabled={inputDisabled}
                placeholder="Branch"
                onChange={handleChange}
                value={formData.branchName}
                className={`${feildStyle}`}
              />
              {errors.branchName && (
                <p className="text-red-500 text-xs mt-1">{errors.branchName}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="contactPersonName"
              >
                Contact Person Name
              </label>
              <input
                type="text"
                name="contactPersonName"
                id="contactPersonName"
                disabled={inputDisabled}
                placeholder="Name"
                onChange={handleChange}
                value={formData.contactPersonName}
                className={`${feildStyle}`}
              />
              {errors.contactPersonName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.contactPersonName}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="homeAddress"
              >
                Home Address
              </label>
              <input
                type="text"
                name="homeAddress"
                id="homeAddress"
                disabled={inputDisabled}
                placeholder="Home Adress"
                onChange={handleChange}
                value={formData.homeAddress}
                className={`${feildStyle}`}
              />
              {errors.homeAddress && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.homeAddress}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <input
                type="number"
                name="mobileNumber"
                id="mobileNumber"
                disabled={inputDisabled}
                placeholder="Mobile Number"
                onChange={handleChange}
                value={formData.mobileNumber}
                className={`${feildStyle}`}
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobileNumber}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="relationship"
              >
                Relationship
              </label>
              <input
                type="text"
                name="relationship"
                id="relationship"
                disabled={inputDisabled}
                placeholder="Relationship"
                onChange={handleChange}
                value={formData.relationship}
                className={`${feildStyle}`}
              />
              {errors.relationship && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.relationship}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="alternativeNumber"
              >
                Alternative Number
              </label>
              <input
                type="number"
                name="alternativeNumber"
                id="alternativeNumber"
                disabled={inputDisabled}
                placeholder="Alternative Number"
                onChange={handleChange}
                value={formData.alternativeNumber}
                className={`${feildStyle}`}
              />
              {errors.alternativeNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.alternativeNumber}
                </p>
              )}
            </div>
          </div>
          <div className="pt-[4vw] flex justify-end gap-4">
            {/* Next Button */}
            <button
              type="submit"
              className="group flex items-center gap-2 px-6 py-2 rounded-md border-2 border-neutral-300
                     bg-white shadow-sm transition-all duration-300 ease-in-out
                     hover:shadow-md hover:-translate-y-[1px]"
            >
              <span className="text-md font-medium text-gray-700">Submit</span>
              <IoMdSend
                size={20}
                className="text-orange-500 transition-transform duration-300 ease-in-out
                       group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
        {isReview && (
          <p className="text-sm text-gray-500 italic mt-4">
            Review mode — editing disabled
          </p>
        )}
      </form>
      <ToastContainer />
    </>
  );
}
