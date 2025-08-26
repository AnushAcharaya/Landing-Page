import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Stethoscope } from "lucide-react";

const containerVariant = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.3 },
    },
};

const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const newsData = {
    leftCard: {
        img: "/image1.jpg",
        date: "Aug 17, 2024",
        doctor: "Dr. Olivia James",
        title: "How Routine Helps Autistic Children Feel More Secure",
        description:
            "A daily routine reduces anxiety, improves behavior, and helps autistic children feel safe and manage transitions.",
        link: "#",
    },
    rightCards: [
        {
            img: "/image3.jpg",
            date: "Aug 18, 2024",
            doctor: "Dr. Noah Bennett",
            title: "Understanding Early Signs of Autism",
            description:
                "Identifying autism symptoms early can improve outcomes with support.",
            link: "#",
        },
        {
            img: "/image4.jpg",
            date: "Sep 02, 2024",
            doctor: "Dr. Emily Carter",
            title: "Nutrition Tips for Autistic Children",
            description:
                "Balanced diets support brain growth and energy in autistic children.",
            link: "#",
        },
    ],
};

const NewsSection = () => {
    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8">
                {/* Header */}
                <motion.div
                    className="flex justify-between items-center mb-12"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.div variants={leftVariant} className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                            <span className="h-[1px] w-12 bg-blue-600"></span>
                            BLOG & ARTICLE
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Latest News & Articles
                        </h2>
                    </motion.div>

                    <motion.button
                        variants={rightVariant}
                        className="inline-flex items-center gap-1 bg-blue-600 text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-blue-700 transition"
                    >
                        VIEW ALL
                        <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                        </span>
                    </motion.button>
                </motion.div>

                {/* Content Grid */}
                <motion.div
                    className="flex flex-col lg:flex-row gap-8 bg-gray-50"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* Left Large Card */}
                    <motion.div
                        variants={leftVariant}
                        className="w-full lg:w-[450px] bg-gray-50" // ✅ Manually set width here
                    >
                        <a
                            href={newsData.leftCard.link}
                            className="block bg-white rounded-xl shadow hover:shadow-xl transition border border-transparent hover:border-blue-600 p-4"
                        >
                            <img
                                src={newsData.leftCard.img}
                                alt="News"
                                className="rounded-lg w-full h-72 object-cover"
                            />
                            <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                                <span className="flex items-center gap-1">
                                    <Calendar size={16} /> {newsData.leftCard.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Stethoscope size={16} /> {newsData.leftCard.doctor}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold mt-3 text-gray-800">
                                {newsData.leftCard.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                {newsData.leftCard.description}
                            </p>
                            <span className="text-blue-600 font-semibold mt-3 inline-block">
                                View Details
                            </span>
                        </a>
                    </motion.div>

                    {/* Right Cards */}
                    <motion.div
                        variants={rightVariant}
                        className="flex-1 flex flex-col gap-6 bg-gray-50"
                    >
                        {newsData.rightCards.map((card, index) => (
                            <a
                                key={index}
                                href={card.link}
                                className="group flex bg-white rounded-xl shadow hover:shadow-xl transition border border-transparent hover:border-blue-600 p-4 items-center h-[240px]" // ✅ Increased height here
                            >
                                <img
                                    src={card.img}
                                    alt="News"
                                    className="w-44 h-full object-cover rounded-lg" // ✅ Increased image width a bit
                                />
                                <div className="ml-4">
                                    <div className="flex items-center justify-between text-gray-500 text-sm mb-2">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={16} /> {card.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Stethoscope size={16} /> {card.doctor}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">{card.description}</p>
                                    <span className="text-blue-600 font-semibold mt-2 inline-block">
                                        View Details
                                    </span>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsSection;
