import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0A2A66] text-white px-12 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Left Content */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold leading-snug">
                        Take the First Step Toward <br /> Brighter Futures
                    </h2>
                    <p className="text-base mt-4 text-gray-200">
                        Our specialists help children with autism thrive through care and support.
                    </p>

                    <button className="mt-6 flex items-center gap-2 bg-[#2D6CDF] hover:bg-[#1e4ea8] text-white px-6 py-3 w-60 rounded-full font-semibold transition">
                        GET SUPPORT NOW
                        <span className="bg-yellow-400 text-[#0A2A66] p-2 rounded-full">
                            <ArrowRight size={16} />
                        </span>
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        src="./image4.jpg"
                        alt="Child with parent"
                        className="rounded-md shadow-lg object-cover w-100"
                    />
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mt-16 border-t border-gray-700 pt-10">

                {/* Logo + About */}
                <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-yellow-400">
                        <span className="text-2xl">⊗</span> AUTIXUM
                    </h3>
                    <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                        Empowering children with autism through specialized care, creative therapies,
                        and inclusive community support for a better tomorrow.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP].map((Icon, i) => (
                            <div
                                key={i}
                                className="p-3 rounded-full bg-[#14377e] hover:bg-yellow-400 hover:text-[#0A2A66] transition cursor-pointer"
                            >
                                <Icon size={16} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pages */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Pages</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                        <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Programs</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Resources</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
                    <p className="text-sm text-gray-300">
                        785 Harmony Lane, Suite <br /> 103 Uptown, NY 10027
                    </p>
                    <p className="mt-2 text-sm text-gray-300">support@autixumcare.org</p>
                    <p className="mt-2 text-sm text-gray-300">(312) 467-2901</p>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
                    <p className="text-sm text-gray-300">
                        Stay informed with tips, upcoming events, and parenting guidance
                        from child care experts and therapists.
                    </p>

                    <div className="mt-4 flex items-center bg-[#14377e] rounded-full p-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent flex-1 px-4 py-2 text-sm outline-none text-white placeholder-gray-400"
                        />
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-[#0A2A66] p-3 rounded-full transition">
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 border-t border-gray-700 pt-6">
                <p>
                    Copyright © 2025{" "}
                    <span className="text-yellow-400 hover:underline cursor-pointer">Autixum</span>.
                    All Rights Reserved.
                </p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-yellow-400">Terms & Conditions</a>
                    <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
