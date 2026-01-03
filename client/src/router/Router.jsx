import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

// Public pages
import LandingPage from "../pages/LandingPage";
import SignupPage from "../pages/SignupPage";
import NotFound from "../pages/NotFound";

// Layouts
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
import UserDashboardLayout from "../layouts/UserDashboardLayout";
import SAdminDashboardLayout from "@/layouts/SAdminDashboardLayout";

// Admin pages
import AdminHome from "../pages/AdminPages/Home";
import RegisterUser from "../pages/AdminPages/RegisterUser";
import UserCards from "../pages/AdminPages/UserCards";
import Leaves from "pages/AdminPages/Leaves";

// superadmin pages
import UserRegistration from "pages/SuperadminPages/UserRegistration";
import Demo from "pages/SuperadminPages/Demo";

// User pages
import UserHome from "../pages/UserPages/UserHome";
import ProtectedRoute from "./ProtectedRoute";
import MultiStepForm from "components/multi-step-form/MultiStepForm";
import EmployeeList from "pages/SuperadminPages/EmployeeList";
import LeaveDetail from "pages/SuperadminPages/LeaveDetail";

import Root from "../layouts/Root";

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
          <ProtectedRoute allowedRoles={["admin", "super-admin"]}>
            <SAdminDashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Demo /> },
          { path: "user-registration", element: <MultiStepForm /> },
          { path: "leaves", element: <Leaves /> },
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
