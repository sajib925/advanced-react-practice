import react from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <section className="py-6 bg-neutral-700 text-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h1 className="text-xl font-normal text-gray-400">SA</h1>
                    </div>
                    <div className="flex items-center justify-center gap-x-4 ">
                        <Link href="#"  className="">Home</Link>
                        <Link href="#"  className="">About</Link>
                        <Link href="#"  className="">Contact</Link>
                    </div>
                    <div className="">
                       <button className="btn btn-">Profile</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header



