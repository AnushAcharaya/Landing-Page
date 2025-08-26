import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        text:
            `"Transcox has been a game-changer for our business. Their timely deliveries and reliable service keep us ahead of our competition!" – Sarah L., Logistics Manager, ABC Corp.`,
        name: "Michael Stone",
        role: "Patient",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        text:
            `"I can always count on Transcox for on-time deliveries. Their service is unmatched." – John D., Operations Head, XYZ Ltd.`,
        name: "Emily Clark",
        role: "Doctor",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        text:
            `"Working with Transcox has simplified our logistics. They are efficient and professional." – Alex R., CEO, Global Corp.`,
        name: "David Lee",
        role: "Manager",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
];

const cardVariants = {
    hidden: (direction) => ({
        opacity: 0,
        x: direction === "left" ? -100 : 100,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 },
    },
};

export default function TestimonialSection() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % testimonials.length);
    const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

    const progress = ((index + 1) / testimonials.length) * 100;
    const t = testimonials[index];

    return (
        <section className="bg-gray-50 py-16">
            {/* Top label with horizontal lines */}
            <div className="text-center mb-6">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-3 text-blue-600 font-semibold uppercase tracking-wide"
                >
                    <span className="h-[2px] w-12 bg-blue-600 inline-block" />
                    <span>Testimonial</span>
                    <span className="h-[2px] w-12 bg-blue-600 inline-block" />
                </motion.div>
            </div>

            {/* Heading */}
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold"
                >
                    Our Satisfied Clients
                </motion.h2>
            </div>

            {/* Card */}
            <div className="max-w-3xl mx-auto relative min-h-[360px] mb-20">
                <motion.div
                    key={index}
                    custom={index % 2 === 0 ? "left" : "right"}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardVariants}
                    className="relative rounded-2xl shadow-lg overflow-visible"
                >
                    {/* Blue background with centered text */}
                    <div className="bg-blue-700 text-white rounded-t-2xl p-16 text-center flex items-center justify-center relativemin-h-[260px]">
                        <Quote className="absolute left-5 top-5 w-10 h-10 text-yellow-400" />
                        <p className="text-lg leading-relaxed">{t.text}</p>
                    </div>

                    {/* Avatar */}
                    <div className="absolute left-1/2 -bottom-16 -translate-x-1/2">
                        <img
                            src={t.image}
                            alt={t.name}
                            className="w-24 h-24 rounded-full border-4 border-white object-cover"
                        />
                    </div>

                    {/* Name & Role */}
                    <div className="absolute left-1/2 -bottom-36 -translate-x-1/2 text-center">
                        <h4 className="font-bold text-xl">{t.name}</h4>
                        <p className="text-gray-700">{t.role}</p>
                    </div>
                </motion.div>
            </div>

            {/* Progress bar + arrows */}
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
                {/* Progress bar */}
                <div className="w-[560px] max-w-full">
                    <div className="h-[4px] bg-slate-300 rounded-full overflow-hidden">
                        <motion.div
                            key={index}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-blue-700"
                        />
                    </div>
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-3 mt-4">
                    <button
                        onClick={prev}
                        aria-label="Previous"
                        className="w-10 h-10 rounded-full bg-white shadow border border-slate-200 grid place-items-center hover:bg-slate-50"
                    >
                        <ChevronLeft className="w-5 h-5 text-slate-700" />
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next"
                        className="w-10 h-10 rounded-full bg-white shadow border border-slate-200 grid place-items-center hover:bg-slate-50"
                    >
                        <ChevronRight className="w-5 h-5 text-slate-700" />
                    </button>
                </div>
            </div>
        </section>
    );
}
