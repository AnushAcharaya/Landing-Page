import React from "react";
import { Star } from "lucide-react";

const SecondScrolling = ({
    text = "CUSTOM ORDER",
    speed = 30,
    className = "",
}) => {
    // Repeat text + star as JSX
    const repeatedContent = Array(10).fill(
        <span className="flex items-center gap-4">
            <span className="text-white">{text}</span>
            <Star className="w-8 h-8 text-yellow-400" />
        </span>
    );

    return (
        <div className={`w-full overflow-hidden bg-blue-900 ${className} mt-18`}>
            <div
                className="whitespace-nowrap text-6xl font-bold py-8 flex gap-8"
                style={{
                    animation: `scroll-continuous ${speed}s linear infinite`,
                }}
            >
                {repeatedContent}
            </div>

            <style jsx>{`
        @keyframes scroll-continuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>
    );
};

export default SecondScrolling;
