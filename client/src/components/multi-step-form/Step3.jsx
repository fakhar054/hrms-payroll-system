import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Step1({ formData, handleChange, nextStep, prevStep, errors }) {

  const feildStyle = "   focus:outline-none  shadow-sm rounded-md px-4 py-2 w-full bg-white border border-neutral-300"

  return (
    <div className="p-8 bg-white rounded-2xl border border-neutral-300 flex flex-col font-clash-medium">
      <div className="pb-[4vw]">
        <h1 className="text-[2rem] font-clash-semibold ">Bank Account Details</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
       
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
            placeholder="Account Title"
            onChange={handleChange}
            value={formData.accountTitle}
            className={`${feildStyle}`}
          />
          {errors.accountTitle && (
            <p className="text-red-500 text-xs mt-1">{errors.accountTitle}</p>
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
            placeholder="Account Number"
            onChange={handleChange}
            value={formData.accountNumber}
           className={`${feildStyle}`}
          />
          {errors.accountNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.accountNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="bankName">
            Bank Name
          </label>
          <input
            type="text"
            name="bankName"
            id="bankName"
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
          <label className="block text-sm font-medium mb-1" htmlFor="branch">
            Branch Name
          </label>
          <input
            type="text"
            name="branchName"
            id="branchName"
            placeholder="Branch"
            onChange={handleChange}
            value={formData.branchName}
            className={`${feildStyle}`}
          />
          {errors.branchName && (
            <p className="text-red-500 text-xs mt-1">{errors.branchName}</p>
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
    <span className="text-md font-medium text-gray-700">
      Back
    </span>
  </button>

  {/* Next Button */}
  <button
    type="button"
    onClick={nextStep}
    className="group flex items-center gap-2 px-6 py-2 rounded-md border-2 border-neutral-300
               bg-white shadow-sm transition-all duration-300 ease-in-out
               hover:shadow-md hover:-translate-y-[1px]"
  >
    <span className="text-md font-medium text-gray-700">
      Next
    </span>
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



