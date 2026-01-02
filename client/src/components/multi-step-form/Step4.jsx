
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdSend } from "react-icons/io";

export default function Step1({ formData, handleChange, nextStep, prevStep }) {

  const feildStyle = "   focus:outline-none  shadow-sm rounded-md px-4 py-2 w-full bg-white border border-neutral-300"

  return (
    <div className="p-8 bg-white rounded-2xl border border-neutral-300 flex flex-col font-clash-medium">
      <div className="pb-[4vw]">
        <h1 className="text-[2rem] font-clash-semibold ">Emergency Contact Details</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
       
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
            placeholder="Name"
            onChange={handleChange}
            value={formData.contactPersonName}
            className={`${feildStyle}`}
          />
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
            placeholder="Home Adress"
            onChange={handleChange}
            value={formData.homeAddress}
            className={`${feildStyle}`}
          />
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
            placeholder="Mobile Number"
            onChange={handleChange}
            value={formData.mobileNumber}
            className={`${feildStyle}`}
          />
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
            placeholder="Relationship"
            onChange={handleChange}
            value={formData.relationship}
            className={`${feildStyle}`}
          />
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
            placeholder="Alternative Number"
            onChange={handleChange}
            value={formData.alternativeNumber}
            className={`${feildStyle}`}
          />
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
    type="submit"
    className="group flex items-center gap-2 px-6 py-2 rounded-md border-2 border-neutral-300
               bg-white shadow-sm transition-all duration-300 ease-in-out
               hover:shadow-md hover:-translate-y-[1px]"
  >
    <span className="text-md font-medium text-gray-700">
      Submit
    </span>
    <IoMdSend
      size={20}
      className="text-orange-500 transition-transform duration-300 ease-in-out
                 group-hover:translate-x-1"
    />
  </button>
</div>
    </div>
  );
}



