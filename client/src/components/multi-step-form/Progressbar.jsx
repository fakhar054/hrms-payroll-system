// import React from "react";

// export default function Prograssbar({ currentStep }) {
//   const steps = [1, 2, 3, 4];

//   return (
//     <div>
//       <div className="flex items-center justify-between w-full mb-8">
//         {steps.map((step, index) => (
//           <div key={step} className="flex items-center flex-1">
//             <div
//               className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold
//               ${
//                 currentStep >= step
//                   ? "bg-green-600 text-white"
//                   : "bg-gray-300 text-gray-600"
//               }`}
//             >
//               {step}
//             </div>

//             {index !== steps.length - 1 && (
//               <div
//                 className={`flex-1 h-1 mx-2
//                 ${currentStep > step ? "bg-green-600" : "bg-gray-300"}`}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



export default function ProgressBar({ currentStep }) {
  const steps = [1, 2, 3, 4];

  return (
    <div className="flex justify-center mb-10">
      <div className="flex items-center w-full max-w-xl">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
              transition-all duration-500
              ${
                currentStep >= step
                  ? "bg-orange-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {step}
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] mx-2 transition-all duration-500
                ${currentStep > step ? "bg-orange-600" : "bg-gray-300"}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
