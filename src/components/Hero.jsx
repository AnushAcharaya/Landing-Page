// ...existing code...
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-16">
            <div className="w-full mx-auto px-6 md:px-12">
                {/* Row: Left (image) + Right (heading + card) */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-24">
                    {/* Left: Image only */}
                    <motion.div
                        className="w-full md:w-[60%]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="relative w-full rounded-xl overflow-hidden">
                            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A1F44] leading-tight">
                                COMPASSIONATE CARE FOR CHILDREN WITH AUTISM
                            </h1>
                            <img
                                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
                                alt="Main"
                                className="w-full h-[550px] md:h-[750px] object-cove"
                            />
                            <div className="absolute -top-6 -right-6 bg-blue-700 text-white w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold shadow-lg border-4 border-white">
                                25+
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Heading + Card */}
                    <motion.div
                        className="w-full md:w-[40%] flex flex-col items-start gap-6 md:pl-8 mt-24"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >




                        <div className="bg-white border-2 border-blue-300 shadow-2xl rounded-2xl p-6 w-full max-w-sm">
                            <div className="bg-blue-50 rounded-xl p-4 mb-4">
                                <img
                                    src="https://images.pexels.com/photos/3933272/pexels-photo-3933272.jpeg"
                                    alt="Small"
                                    className="w-full rounded-xl object-cover h-40"
                                />
                            </div>

                            <p className="text-gray-600 text-base mb-4">
                                Tailored programs and experienced staff to support development and well-being.
                            </p>

                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                            We provide care and support for autistic children, helping them grow confidently.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-blue-700 shadow-md"
                        >
                            LEARN MORE
                            <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </span>
                        </motion.button>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
// ...existing code...
