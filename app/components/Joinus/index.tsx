
"use client";
import { useState } from "react";

const Join = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!name || !email) {
            setStatus({ ok: false, msg: "Please provide name and email." });
            return;
        }
        setLoading(true);
        setStatus(null);
        try {
            const res = await fetch("/api/joinus", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email }),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus({ ok: true, msg: "Thanks! We’ll reach out shortly." });
                setName("");
                setEmail("");
            } else {
                setStatus({ ok: false, msg: data.error || "Failed to subscribe." });
            }
        } catch (e) {
            setStatus({ ok: false, msg: "Unexpected error. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-joinus my-32">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">JOIN US</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10"> Take your business to <br /> the new level.</h2>
                    <p className="text-lightblack text-base font-normal">Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead <br /> historiarum. Golums, zombies unrelenting et Raimi fascinati beheading.</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <div>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black" placeholder="Your name" autoComplete="off" />
                        </div>
                        <div>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black" placeholder="Your email" autoComplete="off" />
                        </div>
                        <div className="sm:mr-3">
                            <button type="button" onClick={handleSubmit} disabled={loading} className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue disabled:opacity-50">
                                Join!
                            </button>
                        </div>
                    </div>
                    {status && (
                        <div className={`mt-3 text-center text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>
                            {status.msg}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Join;
