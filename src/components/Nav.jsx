import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Gift, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null); // for desktop
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null); // NEW: for mobile dropdown toggle
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "HOME", dropdown: ["Home 1", "Home 2", "Home 3", "Home 4", "Home 5"] },
        { name: "SERVICES", dropdown: ["Our Services", "Services Details"] },
        { name: "DOCTORS", dropdown: ["Our Specialists", "Specialist Profile"] },
        { name: "PAGES", dropdown: ["Blog", "Blog Details", "Book Appointment", "FAQS", "Give Donations"] },
        { name: "ABOUT US" },
        { name: "CONTACT US" },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 h-25 px-4 md:px-6 flex items-center justify-between transition-all duration-300
            ${isScrolled ? "bg-white shadow-lg text-[#0A1F44]" : "bg-gradient-to-b from-white/80 to-transparent text-[#0A1F44]"}`}
        >
            {/* Logo */}
            <div className="text-[20px] sm:text-[17px] md:text-[18px] lg:text-[19px] font-bold text-[#0A1F44] shrink-0">
                <span className="text-blue-600">Autixum</span>
            </div>

            {/* Desktop Menu */}
            <ul
                className="hidden md:flex flex-1 justify-center items-center flex-nowrap
                      gap-6 sm:gap-3 md:gap-4 lg:gap-5
                      text-[16px] sm:text-[10px] md:text-[12px] lg:text-[16px]  
                      font-semi-bold text-black md:text-[#0A1F44] list-none 
                      mr-2 ml-2"
            >
                {menuItems.map((items, index) => (
                    <li
                        key={index}
                        className="relative group cursor-pointer h-16 flex items-center min-w-0"
                        onMouseEnter={() => {
                            if (items.dropdown) setDropdownOpen(index);
                            setHoveredIndex(index);
                        }}
                        onMouseLeave={() => {
                            setDropdownOpen(null);
                            setHoveredIndex(-1);
                        }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-1 flex-shrink min-w-0"
                            style={{
                                color:
                                    (items.name === "HOME" && location.pathname === "/") ||
                                        (items.dropdown &&
                                            items.dropdown.some((sub) =>
                                                sub === "Book Appointment" && location.pathname === "/appointment"
                                            ))
                                        ? "#2563eb"
                                        : "#0A1F44",
                                transition: "color 150ms ease",
                            }}
                        >
                            {items.name}
                            {items.dropdown && (
                                <ChevronDown className="xl:block lg:block md:block sm:hidden w-4 h-4" />
                            )}
                        </motion.div>

                        {/* Desktop Dropdown */}
                        {items.dropdown && dropdownOpen === index && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute left-1/2 -translate-x-1/2 z-50 bg-white text-[#0A1F44] shadow-xl rounded-md w-72 overflow-hidden py-2"

                                style={{
                                    top: "100%", // Appear just below the parent
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "1px solid #e5e7eb",
                                }}
                            >
                                {items.dropdown.map((subItems, idx) => {
                                    let subPath = "";
                                    if (subItems === "Book Appointment") subPath = "/appointment";
                                    if (subItems === "Give Donations") subPath = "/donate";

                                    return (
                                        <li
                                            key={idx}
                                            className={`px-4 py-2 text-sm uppercase tracking-wide hover:bg-blue-50 cursor-pointer list-none whitespace-nowrap 
                                                ${location.pathname === subPath ? "text-blue-600 font-bold" : "text-black"
                                                }`}
                                        >
                                            {subPath ? <Link to={subPath}>{subItems}</Link> : subItems}
                                        </li>
                                    );
                                })}
                            </motion.ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-shrink-0 min-w-0">
                <Link to="/appointment">
                    <motion.button
                        className={`px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 md:py-2 rounded-full border shadow-md
                                ${location.pathname === "/appointment"
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-black border-gray-300"
                            }`}
                    >
                        APPOINTMENT
                    </motion.button>
                </Link>
                <Link to="/donate">
                    <motion.button className="px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 md:py-2 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 
                            text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-bold">
                        DONATE NOW
                    </motion.button>
                </Link>
            </div>

            {/* Mobile Icons */}
            <div className="flex md:hidden gap-4 items-center">
                <Calendar className="w-6 h-6 text-[#0A1F44]" />
                <Gift className="w-6 h-6 text-blue-600" />
                <Menu className="w-7 h-7 text-[#0A1F44]" onClick={() => setIsMenuOpen(true)} />
            </div>

            {/* Mobile Sidebar */}
            {isMenuOpen && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "tween" }}
                    className="fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 p-6 overflow-y-auto"
                >
                    {/* Close Button */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-2xl font-bold text-[#0A1F44]">
                            <span className="text-blue-600">Autixum</span>
                        </div>
                        <X className="w-7 h-7 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
                    </div>

                    {/* Sidebar Menu */}
                    <ul className="flex flex-col gap-4 text-lg font-semibold text-[#0A1F44]">
                        {menuItems.map((items, index) => (
                            <li key={index} className="border-b pb-2">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() =>
                                        setMobileDropdownOpen(mobileDropdownOpen === index ? null : index)
                                    }
                                >
                                    <span>{items.name}</span>
                                    {items.dropdown && (
                                        <ChevronDown
                                            className={`w-5 h-5 transform transition-transform duration-300 ${mobileDropdownOpen === index ? "rotate-180" : ""}`}
                                        />
                                    )}
                                </div>

                                {/* Mobile Dropdown */}
                                {items.dropdown && mobileDropdownOpen === index && (
                                    <ul className="pl-4 mt-2 text-sm text-gray-600">
                                        {items.dropdown.map((subItems, idx) => {
                                            let subPath = "";
                                            if (subItems === "Book Appointment") subPath = "/appointment";
                                            if (subItems === "Give Donations") subPath = "/donate";

                                            return (
                                                <li
                                                    key={idx}
                                                    className={`py-1 ${location.pathname === subPath ? "text-blue-600 font-bold" : ""
                                                        }`}
                                                >
                                                    {subPath ? (
                                                        <Link to={subPath} onClick={() => setIsMenuOpen(false)}>
                                                            {subItems}
                                                        </Link>
                                                    ) : (
                                                        subItems
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Nav;
