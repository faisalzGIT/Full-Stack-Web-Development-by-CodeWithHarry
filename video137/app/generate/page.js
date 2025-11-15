"use client"
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const generate = () => {
    const searchParams = useSearchParams();

    const [links, setLinks] = useState([{ link: "", linkText: "" }])
    const [handle, setHandle] = useState(searchParams.get("handle"))
    const [pic, setPic] = useState("")
    const [desc, setDesc] = useState("")

    const handleChange = (index, link, linkText) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i === index) {
                    return { link, linkText };
                } else {
                    return item;
                }
            });
        });
    };

    const addLink = () => {
        setLinks(links.concat([{ link: "", linkText: "" }]))
    }


    const submitLinks = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        });
        console.log(raw);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions);
        const result = await r.json();
        
        if(result.success) {
            toast.success(result.message);
            setLinks([]);
            setPic("")
            setHandle("");
            
        }
        else toast.error(result.message);

        };



    return (
        <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2">
            <div className="col1 flex justify-center items-center flex-col">
                <div className="flex flex-col gap-5 my-8">
                    <h1 className="font-bold text-4xl">Create your Bittree</h1>
                    <div className="item">


                        <h2 className="font-semibold text-2xl">Step 1: Claim your Handle</h2>

                        <div className="mx-4">
                            <input
                                value={handle || ""}
                                onChange={e => { setHandle(e.target.value) }}
                                className="my-2 bg-white px-4 py-2 focus:outline-pink-500 rounded-full"
                                type="text"
                                placeholder="Choose a Handle"
                            />
                        </div>
                    </div>
                    <div className="item">
                        <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
                        {links && links.map((item, index) => {
                            return <div key={index} className="mx-4">
                                <input
                                    value={item.link || ""}
                                    onChange={e => { handleChange(index, e.target.value, item.linkText) }}
                                    className="bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full"
                                    type="text"
                                    placeholder="Enter link"
                                />
                                <input
                                    value={item.linkText || ""}
                                    onChange={e => { handleChange(index, item.link, e.target.value) }}
                                    className="bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full"
                                    type="text"
                                    placeholder="Enter link text"
                                />
                            </div>
                        })}
                        <button onClick={() => { addLink() }} className="p-2 px-3 mx-2 bg-slate-900 text-white font-bold rounded-3xl">
                            + Add Link
                        </button>
                    </div>

                    <div className="item">
                        <h2 className="font-semibold text-2xl">
                            Step 3: Add Picture and Description
                        </h2>
                        <div className="mx-4 flex flex-col ">

                            <input
                                value={ pic || ""}
                                onChange={e=>{setPic(e.target.value)}}
                                className="my-3 bg-white px-4 py-2 focus:outline-pink-500 rounded-full"
                                type="text"
                                placeholder="Enter Pic"
                            />
                            <input
                                value={ desc || ""}
                                onChange={e=>{setDesc(e.target.value)}}
                                className="my-3 bg-white px-4 py-2 focus:outline-pink-500 rounded-full"
                                type="text"
                                placeholder="Enter Description"
                            />
                            <button disabled={pic=="" || handle=="" || links[0].linkText == ""} onClick={() => { submitLinks() }} className="p-3 px-4 my-4 mx-2 bg-slate-900 disabled:bg-slate-600 text-white font-bold rounded-3xl w-fit">
                                Create your Bitlink
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="col2 w-full h-screen bg-[#E9C0E9]">
                <img className="h-full object-contain" src="/generate.jpg" alt="Generate your preview" />
            </div>
            <ToastContainer />
        </div>

    )
}

export default generate