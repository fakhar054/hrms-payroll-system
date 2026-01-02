import React from 'react'

function NotFound() {
  return (
    <div>NotFound</div>
  )
}

export default NotFound









//  <div className="pt-[4vw]">
//           <div className="bg-transparent backdrop-blur-2xl bg-white/4 
//                     border border-white/20  rounded-2xl  overflow-hidden ">
//             <table className="w-full text-left">
//               <thead className=" text-gray-300">
//                 <tr>
//                   {isAdmin && <th className="p-4">Employee</th>}
//                   <th className="p-4">Duration</th>
//                   <th className="p-4">Reason</th>
//                   <th className="p-4">Status</th>
//                   {isAdmin && <th className="p-4">Actions</th>}
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaves.map((leave) => (
//                   <tr key={leave._id} className="border-t border-gray-700 hover:bg-gray-750">
//                     {isAdmin && (
//                       <td className="p-4">
//                         <p className="font-bold">{leave.user?.name}</p>
//                         <p className="text-xs text-gray-400">{leave.employeeId}</p>
//                       </td>
//                     )}
//                     <td className="p-4 text-sm">
//                       {new Date(leave.fromDate).toLocaleDateString()} - <br/>
//                       {new Date(leave.toDate).toLocaleDateString()}
//                     </td>
//                     <td className="p-4 text-sm italic">"{leave.reason}"</td>
//                     <td className="p-4">
//                       <span className={`px-4 py-2 rounded text-xs font-bold uppercase ${
//                         leave.status === 'approved' ? 'bg-[#39FF14] text-black' : 
//                         leave.status === 'rejected' ? 'bg-[#ff0a0a]  text-black' : 'bg-[#FFFF00] text-black'
//                       }`}>
//                         {leave.status}
//                       </span>
//                     </td>
//                     {isAdmin && (
//                       <td className="p-4 space-x-2 flex justify-start items-center">
//                         {leave.status === 'pending' && (
//                           <>
//                             <button onClick={() => handleAction(leave._id, 'approved')} className="text-green-500 text-2xl"><FaCheck /></button>
//                             <button onClick={() => handleAction(leave._id, 'rejected')} className="text-red-500 text-2xl"><RxCross2 /></button>
//                           </>
//                         )}
//                       </td>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             {loading && <p className="p-10 text-center animate-pulse">Loading data...</p>}
//             {!loading && leaves.length === 0 && <p className="p-10 text-center text-gray-500">No leaves found.</p>}
//           </div>
//           </div>
//         </div>