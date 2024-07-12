import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emaillogo from "../assets/emaillogo.png";

const textVariants = {
  initialone: {
    x: -100,
    opacity: 0,
  },
  initialtwo: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const MessageWhite = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const notify = () =>
    toast.success("Thankyou", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const handleChangeEmail = (e) => {
    const input = e.target.value;
    setEmail(input);
  };

  const handleChangeMessage = (e) => {
    const input = e.target.value;
    setMessage(input);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ot20hio", "template_liq7yog", form.current, {
        publicKey: "RIL8zVSXmHmi2UMe1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          notify();
          setEmail("");
          setMessage("");

          setTimeout(() => {
            navigate("/");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  console.log(email, message);
  return (
    <motion.div
      className=" flex flex-col items-center justify-center  bg-black "
    >
      <form
        className=" border  mx-auto element rounded-xl p-2 my-6"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex items-center  w-full border-b gap-2  justify-between sm:gap-4 border-br pb-2">
          <img
            src={emaillogo}
            alt="email"
            className="sm:h-fit sm:w-fit h-10 w-10"
          />
          <input
            type="email"
            value={email}
            required
            name="email"
            onChange={handleChangeEmail}
            placeholder="Enter Email Address"
            className="text-4 font-roboto bg-black  rounded-lg border-none focus:border-none focus:outline-none placeholder:text-gray-400 text-[20px]  font-regular w-[12rem] sm:w-[17rem] md:w-[20rem] p-2"
          />
          <button
            type="submit"
            className="button-top-bottom  font-roboto font-medium sm:text-[20px]"
          >
            Send
          </button>
        </div>
        <div>
          <textarea
            required
            name="message"
            id=""
            cols={6}
            onChange={handleChangeMessage}
            placeholder="Message...."
            value={message}
            className="text-4  font-roboto bg-black  rounded-lg border-none focus:border-none focus:outline-none placeholder:text-gray-400 text-[20px] font-regular w-[20rem] sm:w-[25rem] md:w-[32rem] p-2 h-[10rem]"
          ></textarea>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </form>
    </motion.div>
  );
};

export default MessageWhite;
