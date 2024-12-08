"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    send("service_3zs3w18", "template_sndrwfl", formData, "6faScg7jl7wjajgxd")
      .then((response) => {
        console.log("response", response);
        Swal.fire({
          icon: "success",
          text: "Thanks for being awesome! We have received your message and would like to thank you for writing to us.",
        }).then(() => {
          setEmailForm({
            name: "",
            email: "",
            message: "",
          });
        });
      })
      .catch((err) => {
        console.log("err", err);
        Swal.fire({
          icon: "error",
          text: "Something went wrong!",
        }).then(() => {
          setEmailForm({
            name: "",
            email: "",
            message: "",
          });
        });
      });
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(event) => {
            setFormData({
              ...formData,
              name: event.target.value,
            });
          }}
          className="border border-gray-300 w-full py-2 rounded-lg focus:border-gray-400 outline-none px-4 text-gray-600"
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(event) => {
            setFormData({
              ...formData,
              email: event.target.value,
            });
          }}
          className="border border-gray-300 w-full py-2 rounded-lg focus:border-gray-400 outline-none px-4 text-gray-600"
          placeholder="Enter your email address"
          required
        />
        <textarea
          rows="6"
          name="message"
          value={formData.message}
          onChange={(event) => {
            setFormData({
              ...formData,
              message: event.target.value,
            });
          }}
          className="border border-gray-300 w-full py-2 rounded-lg focus:border-gray-400 outline-none px-4 text-gray-600"
          placeholder="Enter your message"
          required
        ></textarea>
      </div>
      <br />
      <button
        type="submit"
        className="bg-[#4B93FF] hover:bg-[#2266cb] w-full flex justify-center rounded-lg text-white py-2"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
