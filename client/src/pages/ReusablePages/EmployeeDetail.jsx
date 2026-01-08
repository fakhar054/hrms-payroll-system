import { getUserById } from "features/users/userThunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EmployeeDetail() {
  const { id } = useParams();

  const { selectedUser, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("DISPATCHING getUserById with id:", id);

    if (id) {
      dispatch(getUserById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    console.log("selected User: ", selectedUser);
  }, [selectedUser]);

  if (loading) return <p className="p-8">Loading...</p>;
  if (error) return <p className="p-8 text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Employee Profile
        <span className="ml-2 text-orange-500">#{id}</span>
      </h1>

      <div className="grid grid-cols-2 gap-6 bg-[#EEEEEE] p-6 rounded-2xl">
        <Info label="Name" value="John Doe" />
        <Info label="Employee ID" value={id} />
        <Info label="Job Role" value="Frontend Developer" />
        <Info label="Joining Date" value="12 Feb 2024" />
        <Info label="Leave Balance" value="12 Days" />
        <Info label="Account Status" value="Active" />
      </div>
    </div>
  );
}

const Info = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500 uppercase">{label}</p>
    <p className="text-lg font-medium text-gray-800">{value}</p>
  </div>
);
