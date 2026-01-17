import {
  FiSearch,
  FiBell,
  FiMail,
  FiChevronRight,
  FiCommand,
} from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotifications } from "features/notifications/notificationsThunk";

export default function TopBar() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { notifications, loading, error } = useSelector(
    (state) => state.notifications
  );

  useEffect(() => {
    dispatch(getAllNotifications());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  console.log("Notifications:", notifications);

  return (
    <header className="w-full h-[5rem] bg-white border-b border-neutral-300 flex items-center justify-between px-4 font-clash-medium">
      {/* Search */}
      <div className="flex items-center gap-2 bg-[#f8f8f8] border border-zinc-200 rounded-xl px-3 py-2 w-full max-w-md">
        <FiSearch className="text-black" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-black placeholder-black w-full"
        />
        <div className="flex justify-center items-center">
          <FiCommand />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center justify-center gap-2 ml-6">
        <button className="h-9 w-9 rounded-xl    flex items-center justify-center text-black transition-transform duration-300 hover:scale-105 cursor-pointer">
          <FiMail size={20} />
        </button>
        <button className="h-9 w-9 flex items-center justify-center text-black hover:bg-white transition-transform duration-300 hover:scale-105 cursor-pointer">
          <FiBell size={20} />
        </button>

        {/* Profile */}
        <div className="card flex justify-content-center">
          <Button icon="pi pi-external-link" onClick={() => setVisible(true)}>
            <LuUserRound className="pb-1 text-[1.6rem]" />
            <FiChevronRight className="text-black" />
          </Button>
          <Dialog
            className="p-10 bg-black backdrop-blur-2xl bg-black/20 
                    border border-white/10 text-black font-clash-medium rounded-2xl"
            header="Header"
            visible={visible}
            onHide={() => {
              if (!visible) return;
              setVisible(false);
            }}
            style={{ width: "50vw" }}
            breakpoints={{ "960px": "75vw", "641px": "100vw" }}
          >
            <img
              src="/images/pfp.jpeg"
              alt="pfp"
              className="w-15 h-15 rounded"
            />
          </Dialog>
        </div>
        {/* <button className="flex items-center  transition-transform duration-300 hover:scale-105 cursor-pointer ">
          
          <LuUserRound  className="pb-1 text-[1.6rem]" />
          <FiChevronRight className="text-black" />
        </button> */}
      </div>
    </header>
  );
}
