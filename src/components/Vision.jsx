import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const containerVariant = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Vision = () => {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white py-12 px-6 md:px-12 w-full max-w-5xl mx-auto rounded-2xl mt-10"
            // mb-8 adds space below this component
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
        >
            {/* Left Content */}
            <motion.div className="flex flex-col max-w-lg gap-4">
                {/* Title */}
                <motion.h2
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    variants={itemVariant}
                >
                    Mission : Empowering Every Child
                </motion.h2>

                {/* Paragraph 1 */}
                <motion.p
                    className="text-gray-600 text-sm md:text-base"
                    variants={itemVariant}
                >
                    Our mission is to provide comprehensive, personalized support for children with autism,
                    ensuring they have the resources, guidance, and opportunities to grow and thrive, both at
                    home and in the community.
                </motion.p>

                {/* Paragraph 2 */}
                <motion.p
                    className="text-gray-600 text-sm md:text-base"
                    variants={itemVariant}
                >
                    We aim to foster an inclusive environment, engage families actively, and empower educators
                    with effective tools and strategies to maximize each child’s potential.
                </motion.p>

                {/* Small Rounded Button */}
                <motion.button
                    className=" w-40 h-12 inline-flex items-center gap-1 bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition"
                    variants={itemVariant}
                >
                    Work With Us
                    <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                    </span>
                </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.img
                src="./image4.jpg"
                alt="Mission"
                className="w-64 h-64 md:w-[350px] md:h-[350px] rounded-xl object-cover ml-20"
                variants={imageVariant}
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

export default Vision;
