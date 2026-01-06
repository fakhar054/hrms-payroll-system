import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PageHeader from "components/reusable ui/PageHeader";

export default function LeaveDetail() {
  const { id } = useParams();

  const { leaves, loading } = useSelector((state) => state.myLeaves);

  // Find selected leave
  const leave = leaves?.find((l) => l._id === id);

  if (loading) return <p>Loading...</p>;
  if (!leave) return <p className="text-red-500">Leave not found</p>;

  const personalInfo = leave.user?.personalInfo;

  return (
    <div className="w-full min-h-screen bg-white p-8">
      {/* HEADER */}
     
      <PageHeader/>

      {/* DETAILS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-clash- mt-8">
        <InfoCard title="Leave ID" value={leave._id} />
        <InfoCard title="Employee ID" value="EMP-XXX" />
        <InfoCard
          title="Employee Name"
          value={personalInfo?.fullName || "N/A"}
        />
        <InfoCard title="Job Role" value="Software Engineer" />
        <InfoCard
          title="Joining Date"
          value={
            personalInfo?.dateOfJoining
              ? new Date(
                  personalInfo.dateOfJoining
                ).toLocaleDateString()
              : "N/A"
          }
        />
        <InfoCard
          title="Leave Status"
          value={leave.status}
          highlight
        />
        <InfoCard
          title="From Date"
          value={new Date(leave.startDate).toLocaleDateString()}
        />
        <InfoCard
          title="To Date"
          value={new Date(leave.endDate).toLocaleDateString()}
        />
      </div>

      {/* REASON */}
      <div className="mt-8 font-clash-medium">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">
          Reason for Leave
        </h3>
        <p className="p-4 bg-gray-50 rounded-xl text-gray-700 text-sm">
          {leave.reason || "—"}
        </p>
      </div>

      {/* ADMIN COMMENT (placeholder) */}
      <div className="mt-6 font-clash-medium">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">
          Admin Comment
        </h3>
        <p className="p-4 bg-gray-50 rounded-xl text-gray-700 text-sm">
          —
        </p>
      </div>

      {/* ACTIONS (UI ONLY for now) */}
      <div className="flex gap-3 mt-10 font-clash-medium">
        <button className="px-6 py-2 rounded-xl bg-green-100 text-green-700 font-medium hover:bg-green-200">
          Approve
        </button>
        <button className="px-6 py-2 rounded-xl bg-red-100 text-red-700 font-medium hover:bg-red-200">
          Reject
        </button>
      </div>
    </div>
  );
}

/* -------- INFO CARD -------- */

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
