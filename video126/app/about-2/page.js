import React from "react";

export default function AboutPage() {
    return (
        <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: 800, margin: "auto" }}>
            <h1>About WP Help</h1>
            <p>
                WP Help is dedicated to assisting WordPress users of all levels. Whether you're a beginner looking to set up your first site or an experienced developer seeking advanced solutions, our resources, guides, and support are here to help you succeed.
            </p>
            <h2>Our Mission</h2>
            <p>
                We aim to make WordPress simple, accessible, and powerful for everyone. Our team provides tutorials, troubleshooting tips, and expert advice to empower you to build and manage your website with confidence.
            </p>
            <h2>Why Choose Us?</h2>
            <ul>
                <li>Comprehensive WordPress guides</li>
                <li>Step-by-step tutorials</li>
                <li>Friendly support and community</li>
                <li>Latest updates and best practices</li>
            </ul>
            <h2>Contact</h2>
            <p>
                Have questions or need help? Reach out to us at <a href="mailto:support@wphelp.com">support@wphelp.com</a>.
            </p>
        </main>
    );
}