import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../store/contexStore/store";
import { useContext } from "react";
import { toast } from "react-toastify";
const MapForm = () => {
  const { isLoggedIn, BASE_URL } = useContext(AuthContext);
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Validate email
    if (!contact.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(contact.email)) {
      toast.error("Invalid email format");
      return false;
    }

    // Validate subject
    if (!contact.subject.trim()) {
      toast.error("Subject is required");
      return false;
    }
    if (contact.subject.length < 5 || contact.subject.length > 50) {
      toast.error("Subject must be between 5 and 50 characters");
      return false;
    }

    // Validate message
    if (!contact.message.trim()) {
      toast.error("Message is required");
      return false;
    }
    if (contact.message.length < 10 || contact.message.length > 200) {
      toast.error("Message must be between 10 and 200 characters");
      return false;
    }

    return true; // Return true when all validations pass
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      try {
        const response = await fetch(`${BASE_URL}/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        });
        const resData = await response.json();

        if (response.ok) {
          setContact({
            email: "",
            subject: "",
            message: "",
          });
          toast.success("Message sent successfully!");
        } else {
          toast.error(resData.message || "Failed to send message");
        }
      } catch (error) {
        toast.error("Something went wrong! Please try again.");
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 bg-[#1c213e] md:pb-20 pb-10 ">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center md:px-20">
          <div className="lg:col-span-3">
            <section className="">
              <div className=" px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                  Contact Us
                </h2>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      value={contact.email}
                      onChange={handleInput}
                      id="email"
                      name="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@flowbite.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      value={contact.subject}
                      onChange={handleInput}
                      type="text"
                      id="subject"
                      name="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Let us know how we can help you"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      value={contact.message}
                      onChange={handleInput}
                      id="message"
                      rows="6"
                      name="message"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  {isLoggedIn ? (
                    <button
                      type="submit"
                      className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Send message
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate("/login")}
                      type="submit"
                      className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Send message
                    </button>
                  )}
                </form>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 w-full h-[300px] sm:h-[500px] pt-8 md:p-6 lg-p-10 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.5596295237488!2d75.83378127516197!3d25.15057487774094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f856d31549abf%3A0xba5bf142357b1028!2sStar%20library!5e0!3m2!1sen!2sin!4v1725179537340!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapForm;
