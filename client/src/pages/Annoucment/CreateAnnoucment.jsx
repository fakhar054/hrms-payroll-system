import { createAnnouncement } from "features/annoucement/annoucmentThunk";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function CreateAnnoucment() {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.announcements
  );

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message: ", message);
    dispatch(createAnnouncement({ title, message }));
  };
  useEffect(() => {
    if (success) {
      toast.success("Announcement created successfully!");
    }

    if (error) {
      toast.error(error);
    }
  }, [success, error]);

  return (
    <div className="container  py-4 px-4 min-h-screen bg-gray-100 flex justify-center">
      {/* <div className=" sm:w-full md: bg-white p-8 rounded shadow-md w-full max-w-lg"> */}
      <div className="sm:w-full  bg-white md:bg-white p-8 rounded shadow-md w-full md:min-w-lg">
        <div className="flex justify-center items-center">
          <h2 className=" text-xl font-bold mx-auto font-clash-bold">
            Create Annoucement
          </h2>
        </div>

        <form action="" className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter Title Here"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              rows={10}
              cols={50}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              placeholder="Write something here..."
              style={{ padding: "10px", fontSize: "16px" }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
            />
          </div>
          <button
            type="submit"
            className="bg-black py-2 px-4 mt-3 text-white cursor-pointer rounded"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
