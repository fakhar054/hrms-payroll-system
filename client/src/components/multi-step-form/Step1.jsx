import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Step1({ formData, handleChange, nextStep, errors }) {
  const feildStyle =
    "   focus:outline-none  shadow-sm rounded-md px-4 py-2 w-full bg-white border border-neutral-300";

  return (
    <div className="p-8 bg-white rounded-2xl border border-neutral-300 flex flex-col font-clash-medium">
      <div className="pb-[4vw]">
        <h1 className="text-[2rem] font-clash-semibold ">
          Personal Information
        </h1>
      </div>
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
            type="number"
            name="cnic"
            id="cnic"
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
            onChange={handleChange}
            placeholder="Current Adress"
            value={formData.currentAddress}
            className={`${feildStyle}`}
          />
          {errors.currentAddress && (
            <p className="text-red-500 text-xs mt-1">{errors.currentAddress}</p>
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
            onChange={handleChange}
            value={formData.dateOfJoining}
            className={`${feildStyle}`}
          />
          {errors.dateOfJoining && (
            <p className="text-red-500 text-xs mt-1">{errors.dateOfJoining}</p>
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
            <p className="text-red-500 text-xs mt-1">{errors.maritalStatus}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="religion">
            Religion
          </label>
          <select
            name="religion"
            id="religion"
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
          <label className="block text-sm font-medium mb-1" htmlFor="education">
            Education
          </label>
          <input
            type="text"
            name="education"
            id="education"
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
            onChange={handleChange}
            value={formData.workExperience}
            className={`${feildStyle}`}
          />
          {errors.workExperience && (
            <p className="text-red-500 text-xs mt-1">{errors.workExperience}</p>
          )}
        </div>
      </div>
      <div className="pt-2 flex justify-end">
        <button
          type="button"
          onClick={nextStep}
          className="group flex items-center gap-2 px-6 py-2 rounded-md border-2 border-neutral-300
                        bg-white shadow-sm transition-all duration-300 ease-in-out
                        hover:shadow-md hover:-translate-y-[1px]"
        >
          <span className="text-md font-medium text-gray-700">Next</span>
          <IoIosArrowRoundForward
            size={28}
            className="text-orange-500 transition-transform duration-300 ease-in-out
                          group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}
