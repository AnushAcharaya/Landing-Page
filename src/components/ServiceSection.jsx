import { Phone } from "lucide-react";
import { memo, useState } from "react";
import { motion } from "framer-motion";

const RAIL_WIDTH = 150; // Visible part of collapsed card
const OVERLAP = 45; // Overlap between cards

// Service Card Component
const ServiceCard = memo(function ServiceCard({
    title,
    heading,
    description,
    image,
    bgClass,
    onDark,
    railTextClass,
    showContent,
    expanded,
    onClick,
}) {
    return (
        <motion.div
            layout
            onClick={onClick}
            initial={false}
            animate={{
                width: expanded
                    ? "100%"
                    : showContent
                        ? "100%"
                        : `${RAIL_WIDTH}px`,
                x: expanded ? -OVERLAP * 2 : 0, // slide left a bit when expanded
                zIndex: expanded ? 50 : "auto", // bring clicked card on top
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative cursor-pointer transition-all duration-500 rounded-3xl shadow-lg overflow-hidden ${bgClass} min-h-[500px] sm:min-h-[550px] md:min-h-[600px]`}
            style={{ height: "100%" }}
        >
            <div className="flex w-full h-full">
                {/* Left Rail */}
                <div
                    className="relative shrink-0 flex flex-col items-center justify-center"
                    style={{ width: RAIL_WIDTH }}
                >
                    {/* Vertical Line */}
                    <div
                        className={`w-[2px] h-24 ${onDark ? "bg-white/80" : "bg-gray-500"
                            }`}
                    ></div>

                    <div className="h-16"></div>

                    {/* Rotated Text */}
                    <span
                        className={`rotate-[-90deg] origin-center font-semibold tracking-wide text-lg whitespace-nowrap ${railTextClass}`}
                    >
                        {title}
                    </span>
                </div>

                {/* Expanded Content */}
                {(showContent || expanded) && (
                    <div className="flex-1 flex flex-col sm:flex-row">
                        {/* Image */}
                        <div className="flex items-center justify-center p-4 sm:p-6">
                            <img
                                src={image}
                                alt={title}
                                className="w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 object-cover rounded-2xl"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 py-6 md:py-8 gap-4">
                            {/* Icon */}
                            <div
                                className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border ${onDark ? "border-white/70" : "border-blue-500"
                                    }`}
                            >
                                <Phone
                                    className={`${onDark ? "text-white" : "text-blue-600"} w-5 h-5 sm:w-6 sm:h-6`}
                                />
                            </div>

                            {/* Heading - max 2 lines */}
                            <h2
                                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 overflow-hidden line-clamp-2 ${onDark ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                {heading}
                            </h2>

                            {/* Paragraph - max 4 lines */}
                            <p
                                className={`text-sm sm:text-base md:text-lg leading-relaxed mb-4 overflow-hidden line-clamp-4 ${onDark ? "text-white/90" : "text-gray-600"
                                    }`}
                            >
                                {description}
                            </p>

                            {/* Call-to-action */}
                            <a
                                href="#"
                                className={`font-medium underline underline-offset-4 text-sm sm:text-base ${onDark
                                    ? "text-white decoration-white/70 hover:text-white"
                                    : "text-blue-600 hover:text-blue-700"
                                    }`}
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
});

// Main Card Slider Component
const ServiceSection = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    const cards = [
        {
            id: "white",
            title: "School Support",
            heading: "Designed for Children Aged 2 to 16 Years",
            description:
                "Our services are specially designed to support children aged 2 to 16 years, offering personalized care and development programs that cater to the unique needs of each child throughout their growth journey.",
            image: "/image1.jpg",
            bgClass: "bg-gray-50",
            railTextClass: "text-gray-900",
            onDark: false,
        },
        {
            id: "dark-blue",
            title: "ABA Therapy",
            heading: "Comprehensive ABA Therapy",
            description:
                "Our ABA therapy focuses on behavior improvement and skill development to help children lead independent and fulfilling lives.",
            image: "/image4.jpg",
            bgClass: "bg-blue-900",
            railTextClass: "text-white",
            onDark: true,
        },
        {
            id: "light-blue",
            title: "ASD Training",
            heading: "ASD Training for Parents and Teachers",
            description:
                "Our training programs equip parents and teachers with skills and strategies to support children with autism effectively.",
            image: "/image3.jpg",
            bgClass: "bg-blue-700",
            railTextClass: "text-white",
            onDark: true,
        },
        {
            id: "yellow",
            title: "School Support",
            heading: "Individualized School Support Plans",
            description:
                "We provide tailored support plans to help children excel academically and socially, ensuring that each child receives the attention they deserve.",
            image: "/image2.png",
            bgClass: "bg-yellow-400",
            railTextClass: "text-gray-900",
            onDark: false,
        },
    ];

    return (
        <section className="w-full px-0 sm:px-6 lg:px-10 ml-10">
            {/* Desktop Layout */}
            <div className="hidden lg:flex relative h-[800px]">
                {/* White Card */}
                <div className="flex-1 h-full z-10">
                    <ServiceCard {...cards[0]} showContent={true} />
                </div>

                {/* Overlap Cards */}
                <div className="flex h-full">
                    {cards.slice(1).map((card, index) => (
                        <div
                            key={card.id}
                            className="relative h-full"
                            style={{
                                marginLeft: index === 0 ? 0 : -OVERLAP,
                                zIndex: expandedCard === card.id ? 50 : index + 10,
                            }}
                        >
                            <ServiceCard
                                {...card}
                                showContent={false}
                                expanded={expandedCard === card.id}
                                onClick={() => handleCardClick(card.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden mt-10">
                {cards.map((card) => (
                    <ServiceCard key={card.id} {...card} showContent={true} />
                ))}
            </div>
        </section>
    );
};

export default ServiceSection;
