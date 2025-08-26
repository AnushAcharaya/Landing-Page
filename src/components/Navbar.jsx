import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "HOME", dropdown: ["Home 1", "Home 2", "Home3", "Home 4", "Home 5"] },
        { name: "SERVICES", dropdown: ["Our Services", "Services Details"] },
        { name: "DOCTORS", dropdown: ["Our Specialists", "Specialist Profile"] },
        { name: "PAGES", dropdown: ["Blog", "Blog Details", "Book Appointment", "FAQS", "Give Donations"] },
        { name: "ABOUT US" },
        { name: "CONTACT US" },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 h-16 px-10 flex justify-between items-center transition-all duration-300 ${isScrolled
                ? "bg-white shadow-lg text-[#0A1F44]"
                : "bg-gradient-to-b from-white/80 to-transparent text-[#0A1F44]"
                }`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 2.5rem',
                zIndex: 50,
                background: 'white',
                color: '#0A1F44',
                minHeight: '64px'
            }}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
        >
            {/* Logo */}
            <div className="text-2xl font-bold text-[#0A1F44] shrink-0">
                <span className="text-blue-600">Autixum</span>
            </div>

            {/* Menu */}
            <ul
                className="flex justify-center items-center flex-1 gap-6 text-[16px] font-semibold list-none whitespace-nowrap overflow-visible"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: '1 1 0%',
                    minWidth: 0,
                    gap: '1.5rem',
                    listStyle: 'none'
                }}
            >
                {menuItems.map((items, index) => (
                    <li
                        key={index}
                        className="relative group cursor-pointer h-16 flex items-center"
                        style={{
                            position: 'relative',
                            height: '64px',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
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
                            className="inline-flex items-center gap-1 whitespace-nowrap leading-none"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                color:
                                    items.name === 'HOME' || hoveredIndex === index
                                        ? '#2563eb'
                                        : '#0A1F44',
                                transition: 'color 150ms ease'
                            }}
                        >
                            {items.name}
                            {items.dropdown && <ChevronDown size={14} />}
                        </motion.div>

                        {/* Dropdown */}
                        {items.dropdown && dropdownOpen === index && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute left-1/2 -translate-x-1/2 z-50 bg-white text-[#0A1F44] shadow-xl rounded-md w-72 overflow-hidden py-2"
                                style={{
                                    pointerEvents: 'auto',
                                    position: 'absolute',
                                    top: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'white',
                                    borderRadius: '0.375rem',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                                    width: '18rem'
                                }}
                            >
                                {items.dropdown.map((subItems, idx) => (
                                    <li
                                        key={idx}
                                        className="px-4 py-2 text-sm uppercase tracking-wide hover:bg-blue-50 cursor-pointer list-none whitespace-nowrap"
                                    >
                                        {subItems}
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* Buttons */}
            <div
                className="flex gap-4 shrink-0 ml-6"
                style={{ display: 'flex', gap: '1rem' }}
            >
                <motion.button
                    className="px-5 py-2 rounded-full border border-gray-300 bg-white shadow-md hover:shadow-lg hover:bg-gray-100 transition-shadow"
                    style={{
                        padding: '0.5rem 1.25rem',
                        borderRadius: '9999px',
                        border: '1px solid #e5e7eb',
                        background: 'white',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.12)'
                    }}
                >
                    APPOINTMENT
                </motion.button>
                <motion.button
                    className="px-5 py-2 rounded-full bg-blue-600 text-white shadow-md hover:shadow-lg hover:bg-blue-700 transition-shadow"
                    style={{
                        padding: '0.5rem 1.25rem',
                        borderRadius: '9999px',
                        background: '#2563eb',
                        color: 'white',
                        boxShadow: '0 8px 20px rgba(37,99,235,0.35)'
                    }}
                >
                    DONATE NOW
                </motion.button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
