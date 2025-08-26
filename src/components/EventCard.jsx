// EventCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const EVENTS = [
    {
        id: 1,
        date: { month: "NOV", day: "17" },
        time: "10:40 AM - 12:00 PM",
        title: "Windsor Parent Support Group - Windsor Family Hub",
        desc: "Step-by-step process ensuring fresh, sustainable support for families.",
        location: "South Africa",
        image:
            "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: 2,
        date: { month: "NOV", day: "19" },
        time: "02:00 PM - 04:00 PM",
        title: "Inclusive Art Workshop",
        desc: "A creative space designed for all abilities—paint, craft, connect.",
        location: "South Africa",
        image:
            "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: 3,
        date: { month: "NOV", day: "25" },
        time: "09:00 AM - 11:00 AM",
        title: "Community Family Meetup",
        desc: "Meet, share experiences, and build community through conversation.",
        location: "South Africa",
        image:
            "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1600&auto=format&fit=crop",
    },
];

const CARD_WIDTH = 80; // each card is 80vw

const EventCard = () => {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timerRef = useRef(null);

    // Clone first card at the end for smooth circular effect
    const slides = [...EVENTS, EVENTS[0]];

    useEffect(() => {
        start();
        return stop;
    }, []);

    const start = () => {
        stop();
        timerRef.current = setInterval(() => {
            setIndex((i) => i + 1);
        }, 4000);
    };

    const stop = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    // Handle reset when reaching clone
    useEffect(() => {
        if (index === slides.length - 1) {
            const t = setTimeout(() => {
                setIsTransitioning(false);
                setIndex(0);
            }, 850); // match transition duration
            return () => clearTimeout(t);
        } else {
            setIsTransitioning(true);
        }
    }, [index]);

    return (
        <section className="w-screen overflow-hidden relative py-10">
            {/* Track */}
            <motion.div
                className="flex"
                animate={{ x: `-${index * CARD_WIDTH}vw` }}
                transition={
                    isTransitioning
                        ? { duration: 0.8, ease: "easeInOut" }
                        : { duration: 0 }
                }
            >
                {slides.map((event, i) => (
                    <div
                        key={i}
                        className="w-[80vw] flex-shrink-0 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden flex"
                    >
                        {/* LEFT: Image */}
                        <div className="relative w-[44%] min-w-[44%] h-[380px]">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Date */}
                            <div className="absolute top-4 left-4 bg-amber-400 text-slate-900 rounded-xl px-3 py-2 shadow">
                                <div className="text-[10px] font-bold tracking-wide">
                                    {event.date.month}
                                </div>
                                <div className="text-xl font-extrabold">{event.date.day}</div>
                            </div>

                            {/* Location */}
                            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow flex items-center gap-2 text-sm font-medium text-slate-800">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="flex-1 p-8 flex flex-col justify-start">
                            {/* Time */}
                            <p className="text-sm font-semibold tracking-wide text-slate-600 mb-12">
                                {event.time}
                            </p>
                            <h3 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-5">
                                {event.title}
                            </h3>
                            <p className="mt-3 text-slate-600">{event.desc}</p>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Dots (only show for real slides, not clone) */}
            <div className="mt-6 flex items-center justify-center gap-3">
                {EVENTS.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={`h-3 w-3 rounded-full transition-all ${index % EVENTS.length === i
                            ? "bg-blue-600"
                            : "bg-slate-300 hover:bg-slate-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default EventCard;
