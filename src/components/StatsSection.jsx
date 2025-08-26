import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
    { value: 500, suffix: "+", label: "Happy Children Supported" },
    { value: 120, suffix: "+", label: "Professional Therapists" },
    { value: 95, suffix: "%", label: "Parent Satisfaction Rate" },
    { value: 25, suffix: "+", label: "Years Of Experience" },
];

const brushSrc = "/white-brush-stroke.png";

export default function StatsSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="w-full bg-blue-900 min-h-[480px] flex items-center">
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center text-white px-6">
                {stats.map((stat, i) => (
                    <div key={i} className="relative flex flex-col items-center">
                        {/* Brush image centered behind the number */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
                            <img
                                src={brushSrc}
                                alt=""
                                className="w-56 h-auto opacity-40 select-none"
                                draggable="false"
                            />
                        </div>

                        {/* Animated number above brush */}
                        <h2 className="relative z-10 text-6xl md:text-7xl font-extrabold leading-none">
                            {inView ? <CountUp end={stat.value} duration={1.6} /> : 0}
                            {stat.suffix}
                        </h2>

                        <p className="mt-4 text-lg font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
