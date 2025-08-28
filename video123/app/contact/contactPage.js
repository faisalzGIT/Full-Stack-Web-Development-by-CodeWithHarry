import React from "react";
import Script from "next/script";

export default function ContactPage() {
    return (
<>
        <Script>
            {/*
                You can add any client-side JavaScript here
            */}
        </Script>
                    <h1>Contact Us</h1>
                    <form>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" style={{ width: "100%", padding: "0.5rem" }} required />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" style={{ width: "100%", padding: "0.5rem" }} required />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="message">Message:</label><br />
                    <textarea id="message" name="message" rows={5} style={{ width: "100%", padding: "0.5rem" }} required />
                </div>
                <button type="submit" style={{ padding: "0.75rem 1.5rem", background: "#0070f3", color: "#fff", border: "none", borderRadius: 4 }}>
                    Send
                </button>
            </form>
    </>
    );
}