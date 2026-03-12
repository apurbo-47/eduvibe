"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validatePhone = (phone: string) => {
    const bdPhoneRegex = /^01[3-9]\d{8}$/;
    return bdPhoneRegex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhone(form.phone)) {
      toast.error("Please enter a valid Bangladesh phone number");
      return;
    }

    toast.success("Message sent successfully 🚀");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="bg-white pt-8 pb-8 md:pb-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-t-4 border-t-[#7A60FF] border-white shadow-lg p-5 md:p-8 -mt-30 md:-mt-70">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl text-[#333333] font-semibold mb-2 md:mb-4">
          Send us a message
        </h2>
        <p className="text-[#4C4C4C] text-sm md:text-lg mb-8 max-w-xl">
          Have a question, request, or emergency need? Our team is here to help.
          Reach out anytime and well respond promptly.
        </p>

        <form onSubmit={handleSubmit} className=" space-y-2 md:space-y-6">
          {/* Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-[#333333]">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Type Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full mt-1 border border-[#E6E6E6]  rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#7A60FF]"
                required
              />
            </div>

            <div>
              <label className="text-sm text-[#333333]">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Type Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full mt-1 border  border-[#E6E6E6]  rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#7A60FF]"
                required
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-[#333333]">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Ex: hello@demo.com"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 border  border-[#E6E6E6]  rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#7A60FF]"
                required
              />
            </div>

            <div>
              <label className="text-sm text-[#333333]">Phone</label>
              <input
                type="text"
                inputMode="numeric"
                name="phone"
                placeholder="01712345678"
                value={form.phone}
                onChange={handleChange}
                maxLength={11}
                className="w-full mt-1 border  border-[#E6E6E6]  rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#7A60FF]"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-[#333333]">Message</label>
            <textarea
              name="message"
              placeholder="Type Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full mt-1 border  border-[#E6E6E6]  rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7A60FF]"
              required
            />
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              className="flex items-center cursor-pointer gap-2 bg-[#7A60FF] text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
            >
              Send a message
              <span>➜</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
