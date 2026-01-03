import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

// Public pages
import LandingPage from "../pages/GlobalPages/LandingPage";
import SignupPage from "../pages/GlobalPages/SignupPage";
import NotFound from "../pages/GlobalPages/NotFound";

// Layouts
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
import UserDashboardLayout from "../layouts/UserDashboardLayout";
import SAdminDashboardLayout from "@/layouts/SAdminDashboardLayout";

// Admin pages
import AdminHome from "../pages/AdminPages/AdminHome";
import UserCards from "../pages/ReusablePages/UserCards";
import Leaves from "pages/ReusablePages/Leaves";

// superadmin pages
import SAdminHome from "pages/SuperadminPages/SAdminHome";

// User pages
import UserHome from "../pages/UserPages/UserHome";
import ProtectedRoute from "./ProtectedRoute";
import MultiStepForm from "components/multi-step-form/MultiStepForm";
import EmployeeList from "pages/ReusablePages/EmployeeList";
import LeaveDetail from "pages/ReusablePages/LeaveDetail";

import Root from "../layouts/Root";
import LeaveDashboard from "pages/ReusablePages/LeaveDashboard";
import RegisterUser from "pages/ReusablePages/RegisterUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      // ---------------- PUBLIC ----------------
      { index: true, element: <LandingPage /> },
      { path: "signup", element: <SignupPage /> },

      // ---------------- USER DASHBOARD ----------------
      {
        path: "dashboard",
        element: (
          <ProtectedRoute allowedRoles={["employee"]}>
            <UserDashboardLayout />
          </ProtectedRoute>
        ),
        children: [{ index: true, element: <UserHome /> }],
      },

      // ---------------- ADMIN DASHBOARD ----------------
      {
        path: "admin",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <SAdminDashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <AdminHome /> },
          { path: "user-registration", element: <RegisterUser /> },
          { path: "leaves", element: <Leaves /> },
          { path: "user-cards", element: <UserCards /> },
          { path: "leaves/:id", element: <LeaveDetail /> },
          { path: "employees-list", element: <EmployeeList /> },
        ],
      },

      {
        path: "super-admin",
        element: (
          <ProtectedRoute allowedRoles={["super-admin"]}>
            <SAdminDashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <SAdminHome /> },
          { path: "user-registration", element: <MultiStepForm /> },
          { path: "leaves", element: <LeaveDashboard /> },
          { path: "user-cards", element: <UserCards /> },
          { path: "leaves/:id", element: <LeaveDetail /> },
          { path: "employees-list", element: <EmployeeList /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
