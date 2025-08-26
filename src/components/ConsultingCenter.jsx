import React from "react";
import { motion } from "framer-motion";
import { Phone, Share2, ArrowRight } from "lucide-react";

const doctors = [
    {
        name: "John Smith",
        role: "M.A / Behavioral Therapist",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
    },
    {
        name: "Sophia Khan",
        role: "M.S. / Specialist Counselor",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
];

export default function ConsultingSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="bg-white py-12 px-4 sm:px-8 md:px-12">
                {/* Label */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-wide"
                >
                    <span className="w-12 h-[2px] bg-blue-600"></span>
                    <span>Importance of a Friendly Staff</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-10"
                >
                    Specialist Doctors
                </motion.h2>

                {/* Doctor Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {doctors.map((d, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="rounded-xl shadow bg-white overflow-hidden text-center w-full max-w-sm mx-auto"
                        >
                            {/* Blue top */}
                            <div className="bg-blue-700 h-20 relative">
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                                    <img
                                        src={d.image}
                                        alt={d.name}
                                        className="w-20 h-20 rounded-full border-4 border-white object-cover"
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="pt-14 pb-6">
                                <h4 className="font-bold text-lg">{d.name}</h4>
                                <p className="text-gray-500 text-sm">{d.role}</p>

                                {/* Icons */}
                                <div className="flex justify-center gap-4 mt-4">
                                    <button className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition">
                                        <Phone className="w-5 h-5 text-white" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition">
                                        <Share2 className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <a href="#" className="relative text-blue-600 font-medium group">
                        View All
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-blue-700 text-white py-12 px-4 sm:px-8 md:px-12 flex items-center">
                <div className="w-full max-w-md mx-auto">
                    {/* Title */}
                    <motion.h3
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="text-xl sm:text-2xl font-bold mb-6 text-center md:text-left"
                    >
                        Start Consulting
                    </motion.h3>

                    {/* Form + Button */}
                    <motion.form
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="p-3 rounded-md w-full text-black bg-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Age"
                                className="p-3 rounded-md w-full text-black bg-blue-500"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="p-3 rounded-md w-full text-black bg-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="p-3 rounded-md w-full text-black bg-blue-500"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Free Consultation"
                            className="p-3 rounded-md w-full text-black bg-blue-500"
                        />
                        <textarea
                            placeholder="About Mental Condition"
                            rows="4"
                            className="p-3 rounded-md w-full text-black bg-blue-500"
                        ></textarea>

                        {/* Button */}
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-800 transition px-6 py-3 rounded-full font-semibold shadow w-full sm:w-auto"
                        >
                            Submit Now
                            <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-white" />
                            </span>
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
