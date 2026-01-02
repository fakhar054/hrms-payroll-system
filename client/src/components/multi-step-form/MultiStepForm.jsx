// import React, { useState } from "react";
// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Step4 from "./Step4";
// import ProgressBar from "./ProgressBar";

// export default function MultiStepForm() {
//   const [step, setStep] = useState(1);

//   const initialState = {
//     fullName: "",
//     fatherName: "",
//     cnic: "",
//     dob: "",
//     currentAddress: "",
//     permanentAddress: "",
//     phone: "",
//     dateOfJoining: "",
//     email: "",
//     password: "",
//     maritalStatus: "Single",
//     religion: "Muslim",
//     education: "",
//     workExperience: "",
//     department: "",
//     userType:"User",
//     location: "",
//     jobTitle: "",
//     empId: "",
//     basicSalary: "",
//     otherAllowance: "",
//     netSalary: "",
//     accountTitle: "",
//     accountNumber: "",
//     bankName: "",
//     branch: "",
//     contactPersonName: "",
//     mobileNumber: "",
//     relationship: "",
//     alternativeNumber: "",
//   };

//   const [formData, setFormData] = useState(initialState);

//   const nextStep = () => setStep((s) => s + 1);
//   const prevStep = () => setStep((s) => s - 1);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Employee Registered Successfully ✅");
//     setFormData(initialState);
//     setStep(1);
//   };

//   return (
//     <div className="p-4">
//       {/* PAGE HEADING */}
//       <div className="flex flex-col mb-[2vw] ">
//         <h1 className="text-[30px] md:text-[2.5vw] font-clash-bold text-black leading-none ">
//           Hello <span className="text-orange-600">Shahzaib</span>
//         </h1>
//         <p className=" font-clash-medium text-gray-700">
//           Hope you're having a <span className="">productive</span> day :)
//         </p>
//       </div>

//       <ProgressBar currentStep={step} />

//       <form onSubmit={handleSubmit}>
//         {step === 1 && (
//           <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />
//         )}
//         {step === 2 && (
//           <Step2
//             formData={formData}
//             handleChange={handleChange}
//             nextStep={nextStep}
//             prevStep={prevStep}
//           />
//         )}
//         {step === 3 && (
//           <Step3
//             formData={formData}
//             handleChange={handleChange}
//             nextStep={nextStep}
//             prevStep={prevStep}
//           />
//         )}
//         {step === 4 && (
//           <Step4
//             formData={formData}
//             handleChange={handleChange}
//             prevStep={prevStep}
//           />
//         )}
//       </form>
//     </div>
//   );
// }



import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ProgressBar from "./ProgressBar";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

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
    branch: "",

    contactPersonName: "",
    homeAddress: "",
    mobileNumber: "",
    relationship: "",
    alternativeNumber: "",
  };

  const [formData, setFormData] = useState(initialState);

  /* ---------------- VALIDATION HELPERS ---------------- */

  const onlyText = /^[A-Za-z\s]+$/;
  const onlyNumber = /^[0-9]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validateStep = (currentStep) => {
    let newErrors = {};

    /* ---------- STEP 1 ---------- */
    if (currentStep === 1) {
      if (!formData.fullName || !onlyText.test(formData.fullName))
        newErrors.fullName = "Only alphabets allowed";

      if (!formData.fatherName || !onlyText.test(formData.fatherName))
        newErrors.fatherName = "Only alphabets allowed";

      if (!formData.cnic || !onlyNumber.test(formData.cnic) || formData.cnic.length < 10)
        newErrors.cnic = "CNIC must be at least 10 digits";

      if (!formData.empId) newErrors.empId = "Employee ID is required";

      if (!emailRegex.test(formData.email))
        newErrors.email = "Invalid email format";

      if (!passwordRegex.test(formData.password))
        newErrors.password = "Min 8 chars, letters & numbers";

      if (!formData.currentAddress)
        newErrors.currentAddress = "Required";

      if (!formData.permanentAddress)
        newErrors.permanentAddress = "Required";

      if (!formData.dob) newErrors.dob = "Required";

      if (!onlyNumber.test(formData.phone) || formData.phone.length < 10)
        newErrors.phone = "Invalid phone number";

      if (!formData.dateOfJoining)
        newErrors.dateOfJoining = "Required";

      if (!formData.maritalStatus)
        newErrors.maritalStatus = "Required";

      if (!formData.education)
        newErrors.education = "Required";

      if (!onlyNumber.test(formData.workExperience))
        newErrors.workExperience = "Numbers only";
    }

    /* ---------- STEP 2 ---------- */
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

    /* ---------- STEP 3 ---------- */
    if (currentStep === 3) {
      if (!formData.accountTitle) newErrors.accountTitle = "Required";
      if (!formData.accountNumber) newErrors.accountNumber = "Required";
      if (!formData.bankName) newErrors.bankName = "Required";
      if (!formData.branch) newErrors.branch = "Required";
    }

    /* ---------- STEP 4 ---------- */
    if (currentStep === 4) {
      if (!formData.contactPersonName)
        newErrors.contactPersonName = "Required";

      if (!formData.homeAddress)
        newErrors.homeAddress = "Required";

      if (!onlyNumber.test(formData.mobileNumber))
        newErrors.mobileNumber = "Numbers only";

      if (!formData.relationship)
        newErrors.relationship = "Required";

      if (!onlyNumber.test(formData.alternativeNumber))
        newErrors.alternativeNumber = "Numbers only";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- HANDLERS ---------------- */

  const nextStep = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    alert("Employee Registered Successfully ✅");
    setFormData(initialState);
    setErrors({});
    setStep(1);
  };

  return (
    <div className="p-4">
      <ProgressBar currentStep={step} />

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            errors={errors}
          />
        )}

        {step === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
          />
        )}

        {step === 3 && (
          <Step3
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
          />
        )}

        {step === 4 && (
          <Step4
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            errors={errors}
          />
        )}
      </form>
    </div>
  );
}
