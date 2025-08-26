import React from 'react';

const ScrollingText = ({
  text = "AUTISTIC CHILDREN CAREER",
  speed = 30,
  className = ""
}) => {
  const repeatedText = `${text} • ${text} • ${text} • `;

  return (
    <div className={`w-full mt-16 overflow-hidden bg-white ${className}`}>
      <div
        className="whitespace-nowrap text-6xl font-bold text-blue-300 py-8 flex"
        style={{
          animation: `scroll-continuous ${speed}s linear infinite`,
        }}
      >
        <div className="animate-scroll">
          {repeatedText}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-continuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;