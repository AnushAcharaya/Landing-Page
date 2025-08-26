import React from "react";
import { motion } from "framer-motion";

const DonateSection = () => {
    return (
        <div className="w-full flex flex-col md:flex-row items-stretch bg-gray-50">
            {/* Left Side */}
            <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center px-12 py-12 ml-50">
                {/* Line + small text */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="flex items-center gap-4"
                >
                    <span className="w-12 border-t-2 border-gray-400"></span>
                    <p className="text-blue-900 text-sm font-medium">GET IN TOUCH</p>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="text-3xl font-bold text-gray-900 mt-4"
                >
                    Donate Now!
                </motion.h2>

                {/* Form */}
                <form className="mt-8 flex flex-col gap-4 w-4/5 max-w-lg">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-1/2 px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-1/2 px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Donation amount"
                        className="px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        placeholder="Your message..."
                        className="px-4 py-3 rounded-md border border-gray-200 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 w-fit mt-8"
                    >
                        DONATE NOW
                        <span className="bg-yellow-400 text-black rounded-full p-1">➜</span>
                    </button>
                </form>
            </div>

            {/* Right Side with BG Image + Text */}
            <div className="w-full md:w-1/2 relative flex">
                {/* Background Image */}
                <img
                    src="/image3.jpg" // <-- replace with actual image path
                    alt="Donate"
                    className="w-full h-full object-cover"
                />

                {/* Animated Text Lines */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-4xl md:text-5xl font-bold px-6">
                    <motion.span
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                    >
                        DO YOU WANT
                    </motion.span>
                    <motion.span
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false }}
                    >
                        TO HELP THE
                    </motion.span>
                    <motion.span
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: false }}
                    >
                        AUTISTIC CHILDREN?
                    </motion.span>
                </div>
            </div>
        </div>
    );
};

export default DonateSection;
