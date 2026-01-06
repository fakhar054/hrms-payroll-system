import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe, loginUser } from "features/auth/authThunks";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (!user) return;
    console.log("user is : ", user.userType);
    if (user.userType === "admin") {
      navigate("/admin");
    } else if (user.userType === "super-admin") {
      navigate("/admin");
    } else if (user.userType === "employee") {
      navigate("/employee");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const resultAction = await dispatch(loginUser(formData));
  //   if (loginUser.rejected.match(resultAction)) {
  //     // Show error toast
  //     toast.error(resultAction.payload || "Login failed");
  //   } else {
  //     // Optional: success toast
  //     toast.success("Login successful!");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(loginUser(formData));
      if (loginUser.rejected.match(resultAction)) {
        toast.error(resultAction.payload || "Login failed");
      } else {
        toast.success("Login successful!");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center">
        <h1 className="font-wix2 md:text-[2.9vw] text-[5vw] text-white">
          User Login
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mt-10 space-y-5 font-switzer text-white"
      >
        {serverError && (
          <p className="text-red-500 text-center font-bold">{serverError}</p>
        )}

        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="eg. johnfranc@mail.com"
            className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none"
          />
          {fieldErrors.email && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>
          )}
        </div>

        <div>
          <label className="text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none pr-10"
            />
            <span
              className="absolute right-3 top-4 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <p className="text-gray-500 text-xs mt-1">
            Must be at least 8 characters.
          </p>
          {fieldErrors.password && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
