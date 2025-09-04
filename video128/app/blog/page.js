"use client"
import React, { useState } from "react";

const initialPosts = [
    { id: 1, title: "Welcome to My Blog", content: "This is my first post!" },
    { id: 2, title: "React is Awesome", content: "Let's learn React together." },
];

export default function BlogPage() {
    const [posts, setPosts] = useState(initialPosts);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    throw new Error("Simulated error for testing error boundary");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            setPosts([
                ...posts,
                { id: posts.length + 1, title, content }
            ]);
            setTitle("");
            setContent("");
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
            <h1>Simple JS Blog</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
                <input
                    type="text"
                    placeholder="Post Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    style={{ width: "100%", marginBottom: 10, padding: 8 }}
                />
                <textarea
                    placeholder="Post Content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    style={{ width: "100%", marginBottom: 10, padding: 8 }}
                />
                <button type="submit">Add Post</button>
            </form>
            <div>
                {posts.map(post => (
                    <div key={post.id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}