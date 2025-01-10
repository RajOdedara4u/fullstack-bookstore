import React from "react";

const Message = ({ email, message, subject }) => {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
    >
      <h5 className="mb-2 text-[1.1rem] font-bold tracking-tight text-gray-900">
        {email}
      </h5>{" "}
      <h1 className=" text-[0.8rem] text-gray-900 font-semibold">
        {subject}:
        <p className="font-normal text-[0.8rem] text-gray-700">{message}</p>
      </h1>
    </a>
  );
};

export default Message;
