import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cardVariant = {
    hidden: { opacity: 0, x: 100 }, // start further right
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Card = ({ image, icon, title, text }) => {
    return (
        <motion.div
            className="flex flex-col rounded-2xl p-6 w-[330px] h-[240px] bg-white shadow transition-all duration-300 mt-12"
            variants={cardVariant}
            whileHover={{
                // y: -5,
                backgroundColor: "#f8fafc",
                boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.12)",
                transition: { duration: 0.3, ease: "easeOut" },
            }}
        >
            <div className="flex items-center justify-between mb-3">
                <img
                    src={image}
                    alt={title}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="text-blue-600">{icon}</div>
            </div>

            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{text}</p>

            <motion.a
                href="#"
                className="mt-3 inline-flex items-center text-blue-600 font-medium"
                whileHover="hover"
            >
                Learn More
                <motion.span
                    className="ml-1"
                    variants={{
                        hover: { x: 5, transition: { duration: 0.3, ease: "easeOut" } },
                    }}
                >
                    <ArrowRight size={18} />
                </motion.span>
            </motion.a>
        </motion.div>
    );
};

export default Card;
