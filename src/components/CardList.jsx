import { motion } from "framer-motion";
import Card from "./Card";
import { Users, User, Handshake } from "lucide-react";

const containerVariant = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.3 }, // slightly slower stagger
    },
};

const cardsData = [
    {
        image: "./image1.jpg",
        icon: <Users className="w-8 h-8" />,
        title: "Young People",
        text: "Empowering young minds with care, confidence, and guided development support.",
    },
    {
        image: "./image2.png",
        icon: <User className="w-8 h-8" />,
        title: "Adults (11-24)",
        text: "Empowering autistic youth with guidance, skills, and lifelong support systems.",
    },
    {
        image: "image3.jpg",
        icon: <Handshake className="w-8 h-8" />,
        title: "Parents and Careers",
        text: "Empowering families with guidance, resources, and heartfelt daily support.",
    },
];

const CardList = () => {
    return (
        <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-8 bg-gray-50 py-12"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
        >
            {cardsData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </motion.div>
    );
};

export default CardList;
