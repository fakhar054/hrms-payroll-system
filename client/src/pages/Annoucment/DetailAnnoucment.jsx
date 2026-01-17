import React from "react";
import { useLocation, useNavigate } from "react-router";
import { formatDate } from "@/Utils/Utils";

export default function DetailAnnoucment() {
  const location = useLocation();
  const navigate = useNavigate();
  const announcement = location.state?.announcement;

  console.log("Annoucment Objects: ", announcement);

  return (
    <div className="container px-4 py-8">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-semibold">{announcement?.title}</h1>
        <p className="py-1 px-3 bg-green-500 text-amber-800 rounded">
          {formatDate(announcement?.createdAt)}
        </p>
      </div>
      <p className="mb-5">{announcement.message}</p>

      <p className="px-4 py-2 bg-green-700 text-white w-fit rounded">
        {announcement?.createdBy?.personalInfo?.fullName}
      </p>
    </div>
  );
}
