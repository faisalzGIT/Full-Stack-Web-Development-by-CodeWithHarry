"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

const shorten = () => {

    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [generated, setGenerated] = useState(false);

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUrl('');
                setShortUrl('');
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}${shortUrl}`);
                console.log(result)
                alert(result.message);
            })
            .catch((error) => console.error(error));
    }
    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg shadow-lg flex flex-col gap-4'>

            <h1 className='text-2xl text-center font-bold'>Generate your short URL</h1>
            <div className='flex flex-col gap-5'>
                <input type="text"
                    value={url}
                    placeholder='Enter your URL'
                    onChange={e => { setUrl(e.target.value); setGenerated(false) }}
                    className='p-3 bg-white rounded-md focus:outline-purple-400' />

                <input type="text"
                    value={shortUrl}
                    placeholder='Enter your preferred short URL text'
                    onChange={e => setShortUrl(e.target.value)}
                    className='p-3 rounded-md bg-white focus:outline-purple-500' />

                <button onClick={generate} className='bg-purple-600 text-white font-bold p-3 rounded-2xl shadow-lg py-1 my-3'>Generate</button>
            </div>
            {generated && <code className='bg-green-100 p-3 rounded-md text-center'>Your shortened URL is: <Link className='text-blue-600 underline' href={generated} target="_blank" rel="noopener noreferrer">{generated}
            </Link></code>
            }
        </div>
    )
}

export default shorten