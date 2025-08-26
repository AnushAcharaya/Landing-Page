import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Cloud, Lock, TrendingUp, } from "lucide-react";

const containerVariant = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const leftItemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const rightItemVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const floatUpDown = {
    y: [0, -20, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

const floatDownUp = {
    y: [0, 20, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cards = [
    {
        icon: Cpu,
        title: "AI Integration",
        description:
            "Leverage artificial intelligence to streamline workflows and enhance decision making.",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description:
            "Deploy scalable cloud infrastructures tailored to your business needs.",
    },
    {
        icon: Lock,
        title: "Security First",
        description:
            "Protect your data and ensure compliance with top-notch security measures.",
    },
    {
        icon: TrendingUp,
        title: "Analytics",
        description:
            "Turn raw data into actionable insights for business growth and efficiency.",
    },
];

const FloatingCard = () => {
    return (
        <section className="w-full py-20 mt-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Top Content Row */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Left Side */}
                    <div className="space-y-6">
                        <motion.h2
                            className="text-4xl text-blue-700"
                            variants={leftItemVariant}
                        >
                            ____AUTISUM SERVICE
                        </motion.h2>
                        <motion.p
                            className="text-lg font-bold text-gray-600"
                            variants={leftItemVariant}
                        >
                            Together for Every Child in our Autisum
                        </motion.p>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-6">
                        <motion.p
                            className="text-lg text-gray-600"
                            variants={rightItemVariant}
                        >
                            We partner with organizations to provide solutions that improve
                            efficiency, security, and growth.
                        </motion.p>
                        <motion.button
                            variants={rightItemVariant}
                            className="inline-flex items-center gap-1 bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition"
                        >
                            Work With Us
                            <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </span>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Cards Section */}
                <motion.div
                    className="flex mt-20 gap-0 w-full"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        const floatAnim = index % 2 === 0 ? floatUpDown : floatDownUp;

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariant}
                                className="w-1/4"
                            >
                                <motion.div
                                    animate={floatAnim}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    className="group relative bg-white hover:bg-blue-600 transition-colors duration-300 rounded-2xl p-6 shadow-lg flex flex-col h-[500px] w-full"
                                >
                                    {/* Icon and Title Section */}
                                    <div className="flex flex-col items-start relative">
                                        {/* Icon */}
                                        <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:bg-white/20">
                                            <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                        </div>

                                        {/* Gap with hidden line and circle */}
                                        <div className="relative w-full mt-12 mb-6"> {/* Larger gap */}
                                            {/* Vertical line */}
                                            <div className="absolute left-4 top-0 h-full w-1 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                            {/* Circle on top */}
                                            <div className="absolute -top-2 left-3 w-4 h-4 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-left text-xl md:text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                                            {card.title}
                                        </h3>
                                    </div>

                                    {/* Paragraph */}
                                    <p className="mt-6 text-left text-base text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                                        {card.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default FloatingCard;
