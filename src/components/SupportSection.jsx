import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Animated inline image
const PopupImage = ({ src, alt }) => {
    return (
        <motion.img
            src={src}
            className="inline-block h-[40px] w-[64px] object-cover rounded-lg align-middle mx-2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            viewport={{ once: false, amount: 0.5 }}
        />
    );
};

const SupportSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="flex flex-col items-center text-center px-6 py-12">
            {/* Heading with inline images */}
            <div className="w-full flex justify-center">
                <div className="w-full flex justify-center items-center text-center">
                    <div className="w-full flex justify-center items-center">
                        <h1 className="text-2xl md:text-4xl font-semibold leading-snug text-[#12223B] max-w-4xl text-center">
                            Dedicated to{" "}
                            <span className="inline-flex items-center gap-2">
                                <PopupImage
                                    src="./image2.png"
                                    alt="Kid Playing"
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                Nurturing Autistic Children
                            </span>{" "}
                            with Love, Patience, Understanding, and{" "}
                            <span className="inline-flex items-center gap-2">
                                <PopupImage
                                    src="./image1.jpg"
                                    alt="Kid Thinking"
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                Personalized Support for a Brighter Tomorrow
                            </span>
                        </h1>
                    </div>



                </div>

            </div>


            {/* Video Section */}
            <div className="mt-16 w-full max-w-6xl rounded-2xl overflow-hidden shadow-xl relative">
                <video
                    ref={videoRef}
                    src="/video1.mp4"
                    className="w-full h-[520px] object-cover rounded-2xl"
                    poster="./image4.jpg" // optional
                    controls={isPlaying} // only show controls after play
                />

                {/* Play Button Overlay */}
                {!isPlaying && (
                    <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="bg-white/80 p-5 rounded-full shadow-md hover:scale-110 transition-transform">
                            <Play className="w-10 h-10 text-black" />
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
};

export default SupportSection;
