"use client"
import React, { useState } from "react";

export default function ContactPage() {
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
    <main>
      <div className="mx-auto max-w-7xl px-4 pb-32 mb-24 lg:px-10">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-lightblack mb-8">
            Send us a message and we’ll get back to you.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-md border border-linegrey px-3 py-2 text-black focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border border-linegrey px-3 py-2 text-black focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
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
          </form>

          {status && (
            <div className={`mt-4 text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>
              {status.msg}
            </div>
          )}

          <div className="reveal-up flex flex-col gap-6">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[320px]">
              <iframe
                title="Blueberry IT Sky Location"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.43276012345!2d90.4125!3d23.7806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b51f2b1234%3A0x123456789abcdef!2sBarun%20Bhaban%2C%20Gulshan-2%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v0000000000000"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className=" text-slate-700">
              <div>
                <span className="font-semibold">Contact:</span> Fuad Bin Ansar, Proprietor & CEO
              </div>
              <div>
                <span className="font-semibold">Phone:</span> +8801633180008
              </div>
              <div>
                <span className="font-semibold">Address:</span> Barun Bhaban, Plot-15, Gulshan-2, Dhaka-1212
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}