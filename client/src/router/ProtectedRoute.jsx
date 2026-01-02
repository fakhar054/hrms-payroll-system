import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return (
      <div className="text-white text-center mt-10">Verifying session...</div>
    );
  }

  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user?.userType)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute;
