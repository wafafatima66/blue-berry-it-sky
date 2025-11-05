"use client";
import React, { useState } from "react";

const ContactOverlay = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, msg: "Message sent successfully." });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({ ok: false, msg: data.error || "Failed to send message." });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Unexpected error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !name || !email || !message || loading;

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-10 relative -mb-24 z-10">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-linegrey">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Let’s talk</h2>
            <p className="text-lg text-lightblack mb-6">
              Have a project in mind or need support? Send us a message and we’ll get back to you.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="co-name" className="block mb-2 text-sm font-medium">Name</label>
              <input
                id="co-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-md border border-linegrey px-3 py-2 text-black focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="co-email" className="block mb-2 text-sm font-medium">Email</label>
              <input
                id="co-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border border-linegrey px-3 py-2 text-black focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="co-message" className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                id="co-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="block w-full rounded-md border border-linegrey px-3 py-2 text-black focus:outline-none"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={isDisabled}
              className="py-3 px-6 text-lg font-semibold text-white rounded-full bg-red hover:bg-darkred disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <div className={`mt-2 text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactOverlay;