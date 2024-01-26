import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosSend } from "react-icons/io";
import Button from "./Button";

const Contact = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "146976df-3a27-4314-a6d4-66defc0460c6",
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    const json = JSON.stringify(formData);

    toast.promise(
      new Promise((resolve, reject) => {
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              resolve("Sent Successfully!!");
            } else {
              throw new Error("Error Occured Here");
            }
          })
          .catch((error) => {
            reject("Error");
          });
      }),
      {
        loading: "Sending...",
        success: "Mail Sent successfully!",
        error: "Error Occurred!",
      }
    );
  }

  return (
    <div
      className="w-full bg-[#f7f8fc] dark:bg-[#1b1d1e] pt-24 pb-8"
      id="contact"
    >
      <div className="w-11/12 md:10/12 max-w-7xl mx-auto">
        <div className="text-black dark:text-white text-3xl font-bold tracking-wider">
          Get in{" "}
          <span className="text-[#6674cc] dark:text-[#6e96cf]">Touch</span>
        </div>

        <div className="h-0.5 w-full bg-[#777c85] my-6"></div>

        {/* <div className="text-black dark:text-white opacity-70 text-lg my-6">
          Feel free to reach out to me for any questions or opportunities!
        </div> */}

        <div
          className="w-full bg-white dark:bg-[#131516] p-4 sm:p-8 rounded-lg shadow-md"
          data-aos="zoom-in"
        >
          <form onSubmit={submitHandler} className="flex flex-col gap-y-1">
            <label
              htmlFor="name"
              className="font-semibold text-black dark:text-white text-lg tracking-wider "
            >
              Enter your Name
            </label>

            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={onChangeHandler}
              className="text-black dark:text-white text-lg bg-[#f7f8fc] dark:bg-[#1b1d1e] px-3 py-1 rounded-md 
              focus:outline-none border-[0.5px] valid:border-[#777c85] border-transparent transition-all duration-300 mb-4"
            />

            <label
              htmlFor="email"
              className="font-semibold text-black dark:text-white text-lg tracking-wider"
            >
              Enter your Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={onChangeHandler}
              className="text-black dark:text-white text-lg bg-[#f7f8fc] dark:bg-[#1b1d1e] px-3 py-1 rounded-md 
              focus:outline-none border-[0.5px] valid:border-[#777c85] border-transparent transition-all duration-300 mb-4"
            />

            <label
              htmlFor="message"
              className="font-semibold text-black dark:text-white text-lg tracking-wider"
            >
              Type your Message Here
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              onChange={onChangeHandler}
              className="text-black dark:text-white text-lg bg-[#f7f8fc] dark:bg-[#1b1d1e] px-3 py-1 rounded-md 
              focus:outline-none border-[0.5px] valid:border-[#777c85] border-transparent transition-all duration-300 mb-8"
            ></textarea>

            <Button
              content={"Send Message"}
              type={"submit"}
              icon={<IoIosSend />}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
