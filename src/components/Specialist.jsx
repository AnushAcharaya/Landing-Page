// components/AutismSpecialists.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Specialist = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const specialists = [
        {
            id: 1,
            name: "Dr. Isabella Rivera",
            position: "Clinical Psychologist",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
        },
        {
            id: 2,
            name: "Dr. Ethan Parker",
            position: "Pediatric Neurologist",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
        },
        {
            id: 3,
            name: "Dr. Sarah Chen",
            position: "Behavioral Therapist",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
        },
    ];

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % specialists.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + specialists.length) % specialists.length);

    const getVisibleSpecialists = () => {
        const visible = [];
        for (let i = 0; i < 2; i++) {
            const index = (currentIndex + i) % specialists.length;
            visible.push({ ...specialists[index], displayIndex: i });
        }
        return visible;
    };

    const leftVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: (i) => ({ x: 0, opacity: 1, transition: { delay: i * 0.2, duration: 0.6 } }),
    };

    const rightVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: (i) => ({ x: 0, opacity: 1, transition: { delay: i * 0.2, duration: 0.6 } }),
    };

    return (
        <div className="bg-white-50 py-16 px-4 overflow-hidden mt-16">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-6">
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={leftVariants}
                        className="w-16 h-0.5 bg-blue-600"
                    />
                    <motion.div
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={leftVariants}
                        className="text-blue-600 font-semibold text-sm uppercase tracking-wider"
                    >
                        OUR SPECIALISTS
                    </motion.div>
                    <motion.h2
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={leftVariants}
                        className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                    >
                        Autism Specialists
                    </motion.h2>
                    <motion.p
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={leftVariants}
                        className="text-gray-600 text-lg leading-relaxed"
                    >
                        Autism specialists offer personalized care to support children's development.
                    </motion.p>
                    <motion.button
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={leftVariants}
                        className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3"
                    >
                        VIEW ALL
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </div>

                {/* Right Content - Carousel */}
                <div className="relative">
                    <div className="flex gap-6 justify-center">
                        {getVisibleSpecialists().map((specialist, index) => (
                            <motion.div
                                key={specialist.id}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                variants={rightVariants}
                                className="flex flex-col"
                            >
                                {/* Card Image with Plus Icon */}
                                <div className="w-72 h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 relative flex-shrink-0">
                                    <img
                                        src={specialist.image}
                                        alt={specialist.name}
                                        className="w-full h-full object-cover object-center block"
                                        style={{ height: '100%', minHeight: '100%' }}
                                    />

                                    {/* Plus Icon */}
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                                        <div className="w-4 h-0.5 bg-white"></div>
                                        <div className="w-0.5 h-4 bg-white absolute"></div>
                                    </div>
                                </div>

                                {/* Doctor Info below card */}
                                <div className="mt-4 text-center">
                                    <h3 className="text-xl font-bold text-gray-900">{specialist.name}</h3>
                                    <p className="text-gray-600">{specialist.position}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white hover:bg-blue-600 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 group z-10">
                        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white hover:bg-blue-600 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 group z-10">
                        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Specialist;
