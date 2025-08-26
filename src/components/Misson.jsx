import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const statsContainerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
};

const Mission = () => {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white py-12 px-6 md:px-12 w-full max-w-5xl mx-auto rounded-2xl"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
        >
            {/* Left Image */}
            <motion.img
                src="./image1.jpg"
                alt="Mission"
                className="w-64 h-64 md:w-[350px] md:h-[350px] rounded-xl object-cover mr-20"
                variants={imageVariant}
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            />

            {/* Right Text */}
            <motion.div className="flex flex-col max-w-lg gap-4">
                {/* Title */}
                <motion.h2
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    variants={itemVariant}
                >
                    Mission : Empowering Every Child
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                    className="text-gray-600 text-sm md:text-base"
                    variants={itemVariant}
                >
                    Our mission is to provide comprehensive, personalized support for children with autism,
                    ensuring they have the resources, guidance, and opportunities to grow and thrive, both at
                    home and in the community.
                </motion.p>

                {/* Stats */}
                <motion.div className="flex gap-8 mt-4" variants={statsContainerVariant}>
                    <motion.div className="flex flex-col" variants={itemVariant}>
                        <span className="text-2xl md:text-3xl font-bold text-blue-700">80%</span>
                        <span className="border-b border-gray-200 w-10 mt-1 mb-1"></span>
                        <span className="text-gray-800 font-semibold">Proven Results</span>
                        <span className="text-gray-600 text-sm">
                            Our tailored services ensure significant progress for children and families alike.
                        </span>
                    </motion.div>

                    <motion.div className="flex flex-col" variants={itemVariant}>
                        <span className="text-2xl md:text-3xl font-bold text-blue-700">95%</span>
                        <span className="border-b border-gray-200 w-10 mt-1 mb-1"></span>
                        <span className="text-gray-800 font-semibold">Positive Impact</span>
                        <span className="text-gray-600 text-sm">
                            Progress with early intervention 95% of families report improvement.
                        </span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Mission;
