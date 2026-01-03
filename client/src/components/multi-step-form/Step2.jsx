import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Step2({
  formData,
  handleChange,
  nextStep,
  prevStep,
  errors,
}) {
  const feildStyle =
    "   focus:outline-none  shadow-sm rounded-md px-4 py-2 w-full bg-white border border-neutral-300";

  return (
    <div className="p-8 bg-white rounded-2xl border border-neutral-300 flex flex-col font-clash-medium">
      <div className="pb-[4vw]">
        <h1 className="text-[2rem] font-clash-semibold ">
          Job Role Information
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
          <label className="block text-sm font-medium mb-1" htmlFor="userType">
            User Type
          </label>
          <select
            name="userType"
            id="userType"
            onChange={handleChange}
            value={formData.userType}
            className={`${feildStyle}`}
          >
            
            <option value="employee">employee</option>
            <option value="admin">admin</option>
            <option value="super-admin">super-admin</option>
          </select>
          {errors.userType && (
            <p className="text-red-500 text-xs mt-1">{errors.userType}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="jobTitle">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Job Title"
            onChange={handleChange}
            value={formData.jobTitle}
            className={`${feildStyle}`}
          />
          {errors.jobTitle && (
            <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>
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
            placeholder="Basic Salary"
            onChange={handleChange}
            value={formData.basicSalary}
            className={`${feildStyle}`}
          />
          {errors.basicSalary && (
            <p className="text-red-500 text-xs mt-1">{errors.basicSalary}</p>
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
            placeholder="Other Allowance"
            onChange={handleChange}
            value={formData.otherAllowance}
            className={`${feildStyle}`}
          />
          {errors.otherAllowance && (
            <p className="text-red-500 text-xs mt-1">{errors.otherAllowance}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="netSalary">
            Net Salary
          </label>
          <input
            type="number"
            name="netSalary"
            id="netSalary"
            placeholder="Net Salary"
            onChange={handleChange}
            value={formData.netSalary}
            className={`${feildStyle}`}
          />
          {errors.netSalary && (
            <p className="text-red-500 text-xs mt-1">{errors.netSalary}</p>
          )}
        </div>
      </div>
      <div className="pt-[4vw] flex justify-end gap-4">
        {/* Back Button */}
        <button
          type="button"
          onClick={prevStep}
          className="group flex items-center gap-2 px-6 py-2 rounded-md border-2 border-neutral-300
               bg-white shadow-sm transition-all duration-300 ease-in-out
               hover:shadow-md hover:-translate-y-[1px]"
        >
          <IoIosArrowRoundBack
            size={28}
            className="text-orange-500 transition-transform duration-300 ease-in-out
                 group-hover:-translate-x-1"
          />
          <span className="text-md font-medium text-gray-700">Back</span>
        </button>

        {/* Next Button */}
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
