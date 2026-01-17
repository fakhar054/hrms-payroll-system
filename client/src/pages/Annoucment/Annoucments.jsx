import axios from "axios";
import { getAnnouncement } from "features/annoucement/annoucmentThunk";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

export default function UserAnnoucment() {
  const dispatch = useDispatch();
  const { announcements, loading, error } = useSelector(
    (state) => state.announcements
  );

  useEffect(() => {
    dispatch(getAnnouncement());
  }, [dispatch]);

  useEffect(() => {
    console.log("Announcements updated:", announcements);
  }, [announcements]);

  const truncatMessage = (message, wordsLimit = 8) => {
    const words = message.split(" ");
    if (words.length <= wordsLimit) {
      return message;
    }
    return words.slice(0, wordsLimit).join(" ");
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${day}-${month}-${year}`;
  };

  return (
    <div className="container sm:px-4  my-4 mx-4 md:px-8">
      <div className="flex justify-center">
        <h1 className="text-xl font-bold font-clash-bold mb-6">
          All Annouocments
        </h1>
      </div>

      <div>
        <table className="w-full table-auto bg-white shadow-md rounded-lg">
          <thead className="bg-gray-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Author</th>
              <th className="py-3 px-4 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((singleAnnoucment, i) => (
              <tr
                key={i}
                // onClick={() => handleRowClick(singleAnnoucment.id)}
                className="hover:bg-blue-100 cursor-pointer transition-colors border-b border-gray-200 "
              >
                <td className="py-3 px-4 whitespace-nowrap">
                  {singleAnnoucment?.title}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {formatDate(singleAnnoucment?.createdAt)}
                </td>
                <td className="py-3 px-4 whitespace-nowrap  ">
                  <p className="flex items-center bg-green-500 py-1 px-3 rounded">
                    {singleAnnoucment?.createdBy?.personalInfo?.fullName}
                  </p>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {truncatMessage(singleAnnoucment?.message)}
                  <span className="text-blue-500">
                    <Link
                      to={`annoucment-details/123`}
                      state={{ announcement: singleAnnoucment }}
                    >
                      Read More...
                    </Link>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
