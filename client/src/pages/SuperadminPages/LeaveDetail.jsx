import { useParams } from "react-router-dom";

export default function LeaveDetail() {
  const { id } = useParams();

  return (
    <div className="w-full min-h-screen bg-white p-4">
        <div className="flex flex-col mb-8 ">
          <h1 className="text-[30px] md:text-[2.5vw] font-clash-bold text-black leading-none">
            Hello <span className="text-orange-600">Shahzaib</span>
          </h1>
          <p className="font-clash-medium text-gray-700">
            Hope you're having a <span>productive</span> day :)
          </p>
        </div>
      <div className=" mx-auto bg-white ">
        {/* PAGE HEADING (GLOBAL STYLE) */}
        

        {/* CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4    font-clash-medium">
          <InfoCard title="Leave ID" value={id} />
          <InfoCard title="Employee ID" value="EMP-002" />
          <InfoCard title="Employee Name" value="Liam Johnson" />
          <InfoCard title="Job Role" value="UX Researcher" />
          <InfoCard title="Joining Date" value="10 Aug 2022" />
          <InfoCard title="Leave Status" value="Pending" highlight />
          <InfoCard title="From Date" value="20 Feb 2025" />
          <InfoCard title="To Date" value="25 Feb 2025" />
        </div>

        {/* REASON */}
        <div className="mt-8 font-clash-medium">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Reason for Leave
          </h3>
          <p className="p-4 bg-gray-50 rounded-xl text-gray-700 text-sm">
            Attending a family event and handling personal commitments.
          </p>
        </div>

        {/* ADMIN COMMENT */}
        <div className="mt-6 font-clash-medium">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Admin Comment
          </h3>
          <p className="p-4 bg-gray-50 rounded-xl text-gray-700 text-sm">
            —
          </p>
        </div>

        {/* ACTIONS (UI ONLY) */}
        <div className="flex gap-3 mt-10 font-clash-medium">
          <button className="px-6 py-2 rounded-xl bg-green-100 text-green-700 font-medium hover:bg-green-200">
            Approve
          </button>
          <button className="px-6 py-2 rounded-xl bg-red-100 text-red-700 font-medium hover:bg-red-200">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, value, highlight }) {
  return (
    <div className="p-4 border rounded-xl">
      <p className="text-xs text-gray-500 mb-1">{title}</p>
      <p
        className={`text-sm font-medium ${
          highlight ? "text-orange-600" : "text-gray-800"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
