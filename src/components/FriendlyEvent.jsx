import React from "react";
import { motion } from "framer-motion";


const FriendlyEvent = () => {
    return (
        <div className="w-full flex items-center justify-between px-12 py-12 mt-14 ">
            <div className="flex flex-col gap-6 ml-50">
                <div className="flex items-center gap-4">
                    <span className="w-12 border-t-2 border-gray-400"></span>
                    <motion.h3
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="text-3xl font-normal text-gray-900"
                    >
                        EVENTS FOR IMPROVED

                    </motion.h3>

                </div>

                <motion.h2

                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: false }}
                    className="text-xl font-bold text-gray-700"
                >
                    Autism Friendly Events
                </motion.h2>

            </div>
            <motion.p
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="max-w-lg text-gray-600 leading-relaxed mr-50"
            >
                Join our inclusive events designed for children with autism and their families, fostering community.

            </motion.p>

        </div>
    );
};
export default FriendlyEvent;