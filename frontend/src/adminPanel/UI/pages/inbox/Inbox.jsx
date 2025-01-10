import React, { useState, useEffect } from "react";
import Header from "../../commonComponents/Header";
import Message from "./Message";
import { AuthContext } from "../../../../store/contexStore/store";
import { useContext } from "react";
const Inbox = () => {
  const { BASE_URL } = useContext(AuthContext);
  const [messageData, smessageData] = useState([
    {
      email: "",
      subject: "",
      message: "",
    },
  ]);
  useEffect(() => {
    const getusers = async () => {
      try {
        const response = await fetch(BASE_URL + "/getmessage", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          smessageData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getusers();
  }, []);

  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
        <Header />
        <div className=" w-full h-screen overflow-y-scroll">
          <h1 className="text-[2rem] font-semibold text-center my-5 sm:my-20">
            Message's
          </h1>
          <div className=" p-4 flex flex-wrap gap-5 justify-start">
            {messageData.map((obj, index) => (
              <Message
                key={index}
                email={obj.email}
                subject={obj.subject}
                message={obj.message}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Inbox;
