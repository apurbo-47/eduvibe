"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const inputRows = [
  [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Type name",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Type name",
    },
  ],
  [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Ex: hello@demo.com",
    },
    { name: "phone", label: "Phone", type: "tel", placeholder: "01612345678" },
  ],
];

const Form = () => {
  const [form, setForm] = useState<FormData>({
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
    console.log(form);

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
    <div className="md:p-0 p-5 mt-20">
      <div className="max-w-4xl mx-auto  mb-7 md:mb-16 bg-white relative rounded-2xl border border-t-4 border-t-[#7A60FF] border-white shadow-lg p-5 md:p-8 ">
        <form onSubmit={handleSubmit} className="  space-y-2 md:space-y-6">
          {inputRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {row.map((input) => (
                <div key={input.name}>
                  <label
                    htmlFor={input.name}
                    className="block text-sm md:text-base  text-[#333333]"
                  >
                    {input.label}
                  </label>

                  <input
                    key={input.name}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={form[input.name as keyof FormData]}
                    onChange={handleChange}
                    className="w-full mt-1 border border-[#E6E6E6]  rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#7A60FF]"
                    required
                  />
                </div>
              ))}
            </div>
          ))}

          {/* textarea full width */}
          <div>
            <label className="block text-sm md:text-base text-[#333333]">
              Message
            </label>

            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              className="w-full mt-1 border border-[#E6E6E6] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#7A60FF]"
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
            </button>
            <button className="bg-[#7A60FF] px-4 py-2 rounded-tl-full rounded-bl-full rounded-br-full text-white hover:bg-purple-700 transition cursor-pointer ">
              ➜
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
