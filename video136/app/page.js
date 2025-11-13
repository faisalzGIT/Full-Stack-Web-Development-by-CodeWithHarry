import Image from "next/image";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link";


const poppins = localFont({
    src: "./fonts/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 900",
});


export default function Home() {
    return (
        <div className="bg-purple-100">
            <section className="grid grid-cols-2 h-[50vh]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <p className={`text-2xl font-bold ${poppins.className}`}>
                        The best URL shortener in the Market
                    </p>
                    <p>
                        We are the most straightforward and efficient URL shortener in the world.
                    </p>
                    <div className="flex gap-4 justify-start">
                        <Link href="/generate"><button className="text-white rounded-2xl px-3  font-semibold bg-purple-500 shadow-lg p-2">Try Now</button></Link>
                <Link href="/generate"><button className='text-white rounded-2xl px-3  font-semibold bg-purple-500 shadow-lg p-2'>Github</button></Link>

                    </div>
                </div>
                <div className="flex justify-start relative">
                    <Image className="mix-blend-darken" src="/vector.jpg" alt="an image of a vector" fill={true} />
                </div>
            </section>
        </div>
    );
}
