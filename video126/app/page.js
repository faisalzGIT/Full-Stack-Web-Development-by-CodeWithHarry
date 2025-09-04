import Image from "next/image";

export default async function Home() {
    async function greet() {
        return "faisal is not giving his 100%"
    }

    console.log(await greet())
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      <p className="mt-4 text-lg">This is a simple example of a Next.js page.</p>
    </main>
  );
}