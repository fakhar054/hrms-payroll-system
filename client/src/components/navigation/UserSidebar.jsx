import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiBox,
  FiUsers,
  FiChevronDown,
  FiCalendar,
  FiSun,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiCircleList } from "react-icons/ci";
import { RiUserAddLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logoutUser } from "features/auth/authThunks";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggle = () => setCollapsed(!collapsed);
  const toggleMenu = (key) => setOpen(open === key ? null : key);

  const linkBase =
    "flex items-center gap-3 rounded-xl px-3 py-3 text-[14px] text-white transition hover:backdrop-blur-4xl hover:bg-transparent hover:bg-white/10 hover:text-orange-500";

  const iconStyle = "text-white";

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate("/");
  };

  return (
    <aside
      className={`
        h-screen border-r border-neutral-800
        bg-black relative
        transition-all duration-300
        ${collapsed ? "w-[72px]" : "min-w-[240px]"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 overflow-hidden">
          {!collapsed && (
            <h1 className="font-clash-bold text-[1.3rem] text-white flex">
              Presence <span className="text-orange-600">PRO</span>
            </h1>
          )}
        </div>
        <button onClick={toggle} className="text-white">
          <HiOutlineChevronLeft
            size={20}
            className={`transition ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Menu */}
      <nav className="px-3 py-6 space-y-1 font-clash-medium text-white">
        <NavLink to="/employee" className={linkBase}>
          <LuLayoutDashboard size={18} />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        {/* Employees Dropdown */}
        {/* <div>
          <button
            onClick={() => toggleMenu("employees")}
            className={`${linkBase} w-full justify-between`}
          >
            <div className="flex items-center gap-3">
              <FiUsers size={18} />
              {!collapsed && <span>Employees</span>}
            </div>
            {!collapsed && <FiChevronDown size={16} className={iconStyle} />}
          </button>

          {!collapsed && open === "employees" && (
            <div className="ml-9 mt-1 space-y-1">
              <NavLink to="/user-cards" className={linkBase}>
                <CiCircleList className="text-[17px]" />
                List
              </NavLink>
              <NavLink to="/user-registration" className={linkBase}>
                <RiUserAddLine className="text-[17px]" />
                Add New
              </NavLink>
            </div>
          )}
        </div> */}

        <NavLink to="leaves" className={linkBase}>
          <FiBox size={18} />
          {!collapsed && <span>Leaves</span>}
        </NavLink>

        <NavLink to="/management" className={linkBase}>
          <FiCalendar size={18} />
          {!collapsed && <span>Management</span>}
        </NavLink>

        {/* Attendance Dropdown */}
        <div>
          <button
            onClick={() => toggleMenu("attendance")}
            className={`${linkBase} w-full justify-between`}
          >
            <div className="flex items-center gap-3">
              <FiCalendar size={18} />
              {!collapsed && <span>Attendance</span>}
            </div>
            {!collapsed && <FiChevronDown size={16} className={iconStyle} />}
          </button>

          {!collapsed && open === "attendance" && (
            <div className="ml-9 mt-1 space-y-1">
              <NavLink to="/attendance/logs" className={linkBase}>
                Logs
              </NavLink>
              <NavLink to="/attendance/reports" className={linkBase}>
                Reports
              </NavLink>
            </div>
          )}
        </div>

        <div className="border-b border-neutral-800 pb-8">
          <NavLink to="/holidays" className={linkBase}>
            <FiSun size={18} />
            {!collapsed && <span>Holidays</span>}
          </NavLink>
        </div>
      </nav>

      {/* Footer */}
      <div className="px-3 w-full space-y-1 font-clash-medium absolute bottom-4">
        <NavLink to="/settings" className={linkBase}>
          <FiSettings size={18} />
          {!collapsed && <span>Settings</span>}
        </NavLink>
        <NavLink className={linkBase} onClick={handleLogout}>
          <FiLogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </NavLink>
      </div>
    </aside>
  );
}
