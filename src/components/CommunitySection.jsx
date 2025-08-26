import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1200;
        const increment = target / (duration / 16);


        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(counter);
            }
            setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(counter);
    }, [target]);
    return <span>{count.toLocaleString()}+</span>;
};

const CommunitySection = () => {

    const images = [
        { src: "/image1.jpg", className: "top-10 left-20 rotate-[-8deg]" },
        { src: "/image2.png", className: "top-10 right-20 rotate-[-8deg]" },
        { src: "/image3.jpg", className: "bottom-10 left-28 rotate-[6deg]" },
        { src: "/image4.jpg", className: "bottom-10 right-28 rotate-[-6deg]" },
    ];

    return (
        <div className='relative flex flex-col items-center justify-center py-24 overflow-hidden bg-white'>
            {/* Images */}
            {images.map((img, i) => (
                <motion.img
                    key={1}
                    src={img.src}
                    alt="community"
                    className={`absolute w-38 h-38 object-cover rounded-xl shadow-lg ${img.className}`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: false }}

                />

            ))}
            {/* Text */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewPort={{ once: false }}
                className="text-xl md:text-2xl text-center max-w-2xl font-bold text-gray-800 mb-4"
            >
                Join us on a journey to empower communities and transform the lives of autistic children.

            </motion.h2>

            {/* Number */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-6 mb-4"


            >
                <Counter target={40364} />

            </motion.div>

            {/* Button */}

            <motion.button
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
                className="mt-8 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold flex items-center gap-2 shadow-lg hover:bg-blue-700 transition"

            >
                JOIN OUR COMMUNITY
                <span className="bg-yellow-400 text-blue-900 rounded-full px-2 py-1 ml-1">→</span>

            </motion.button>



        </div>
    );


};
export default CommunitySection;