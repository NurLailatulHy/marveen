"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
      throw new Error("Failed to send");
    }

      const result = await response.json();

      if (result.success) {

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between content-center gap-[16px]"
    >
      <div>
        <label className="text-h6 text-base mb-2">NAME</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-base/40 focus:border-base outline-none text-base py-2"
        />
      </div>

      <div>
        <label className="text-h6 text-base mb-2">EMAIL</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-base/40 focus:border-base outline-none text-base py-2"
        />
      </div>

      <div>
        <label className="text-h6 text-base mb-2">MESSAGE</label>
        <textarea
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-base/40 focus:border-base outline-none text-base py-2 resize-none"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="h-[45px] w-[250px] flex items-center justify-center rounded-full bg-n500 px-6 py-4 text-btn2 text-base rounded-full"
        >
          {loading ? "Send Message" : "Book a Discovery Call"}
        </button>
      </div>
    </form>
  );
}
