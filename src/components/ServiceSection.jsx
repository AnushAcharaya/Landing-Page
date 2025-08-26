import { Phone } from "lucide-react"; // 

const ServiceSection = () => {
    return (
        <div className="flex w-full h-[500px] bg-gray-50 rounded-3xl overflow-hidden">

            {/* Left Section */}
            <div className="flex items-center">
                {/* Vertical Label */}
                <div className="flex flex-col items-center px-4">
                    <span className="rotate-[-90deg] text-gray-700 font-medium tracking-wide">
                        School Support
                    </span>
                    <div className="w-[1px] h-16 bg-gray-400 mt-2"></div>
                </div>

                {/* Image */}
                <img
                    src="/image1.jpg"
                    alt="Child"
                    className="w-64 h-72 object-cover rounded-2xl"
                />
            </div>

            {/* Middle Content */}
            <div className="flex-1 flex flex-col justify-center px-12 py-20">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 border border-blue-500 rounded-full mb-6">
                    <Phone className="text-blue-600 w-6 h-6" />
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Designed for Children Aged 2 <br /> to 16 Years
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed max-w-lg">
                    Our services are specially designed to support children aged 2 to 16 years,
                    offering personalized care and development programs that cater to the
                    unique needs of each child throughout their growth journey.
                </p>

                {/* Call Now */}
                <a
                    href="#"
                    className="text-blue-600 font-medium underline hover:text-blue-700"
                >
                    Call Now
                </a>
            </div>
            {/* Right Tabs */}
            <div className="relative h-full w-[400px]">
                {/* Blue-900 tab (back) */}
                <div className="absolute top-0 right-24 h-full w-44 bg-blue-900 rounded-tl-3xl rounded-bl-3xl flex items-center pl-0 z-10">
                    <span className="rotate-[-90deg] font-semibold text-white origin-left ml-2">
                        ABA Therapy
                    </span>
                </div>

                {/* Blue-700 tab (middle) */}
                <div className="absolute top-0 right-12 h-full w-44 bg-blue-700 rounded-tl-3xl rounded-bl-3xl flex items-center pl-0 z-20">
                    <span className="rotate-[-90deg] font-semibold text-white origin-left ml-2">
                        ASD Training
                    </span>
                </div>

                {/* Yellow tab (front, top layer) */}
                <div className="absolute top-0 right-0 h-full w-44 bg-yellow-400 rounded-tl-3xl rounded-bl-3xl flex items-center pl-0 z-30">
                    <span className="rotate-[-90deg] font-semibold text-gray-900 origin-left ml-2">
                        School Support
                    </span>
                </div>
            </div>







        </div>
    );
};
export default ServiceSection;
