// app/[shortUrl]/page.js
import { redirect } from 'next/navigation';
import clientPromise from '@/lib/mongodb';

export default async function Page({ params }) {
  const shortUrl = (await params).shorturl; // ✅ simpler & correct destructuring

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: shortUrl });
  console.log(doc);

  if (doc?.url) {
    redirect(doc.url); // ✅ redirect to the original URL
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`); // ✅ fallback to home
  }
}
