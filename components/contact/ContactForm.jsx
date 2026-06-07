"use client";
import React, { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    send("service_3zs3w18", "template_sndrwfl", formData, "6faScg7jl7wjajgxd")
      .then((response) => {
        console.log("response", response);
        Swal.fire({
          icon: "success",
          text: "Thanks for being awesome! We have received your message and would like to thank you for writing to us.",
        }).then(() => {
          setFormData({
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
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        });
      })
      .finally(() => {
        setLoading(false);
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
        disabled={loading}
        className="bg-[#4B93FF] hover:bg-[#2266cb] disabled:opacity-70 disabled:cursor-not-allowed w-full flex justify-center items-center gap-2 rounded-lg text-white py-2"
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
