import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { getMe } from "../features/auth/authThunks";

export default function Root() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-white text-center mt-10 text-lg">
        Checking session...
      </div>
    );
  }

  if (error) {
    return <h1>Failied root</h1>;
  }

  return <Outlet />;
}
