import { useState } from "react";
import logo from "../assets/logo.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import {
    Notifications,
    Search,
    Menu,
    Close,
} from "@mui/icons-material";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const navItems = ["Home", "Services", "Projects", "Team"];

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm sticky top-0 z-50"
        >
            <div className="flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-3">
                    {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#3F7D52] shadow-md" /> */}
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative w-10 h-10"
                    >
                        {/* Glow derrière */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#3B82F6] via-[#3F7D52] to-[#7C3AED] blur-md opacity-40" />

                        {/* Container logo */}
                        <div className="relative w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-center overflow-hidden">

                            {/* LOGO */}
                            <img
                                src={logo}
                                alt="Miray Logo"
                                className="w-7 h-7 object-contain"
                            />
                        </div>
                    </motion.div>

                    <div>
                        <h1 className="text-lg font-extrabold text-slate-900">
                            Miray
                        </h1>
                        <p className="text-xs text-slate-500 -mt-1">
                            Technology Group
                        </p>
                    </div>
                </div>

                {/* NAV DESKTOP */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    {navItems.map((item) => (
                        <span
                            key={item}
                            className="relative cursor-pointer hover:text-[#3B82F6] transition"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3B82F6] transition-all group-hover:w-full" />
                        </span>
                    ))}
                </nav>

                {/* RIGHT ACTIONS */}
                <div className="flex items-center gap-3">

                    <button className="p-2 rounded-xl bg-slate-100 hover:bg-blue-50 transition">
                        <Search className="text-slate-600" />
                    </button>

                    <button className="p-2 rounded-xl bg-slate-100 hover:bg-blue-50 transition relative">
                        <Notifications className="text-slate-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-[#3B82F6] rounded-full" />
                    </button>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        className="md:hidden p-2 rounded-xl bg-slate-100"
                    >
                        {openMenu ? (
                            <Close className="text-slate-700" />
                        ) : (
                            <Menu className="text-slate-700" />
                        )}
                    </button>

                    {/* CTA */}
                    <button
                        className="hidden md:block px-4 py-2 rounded-xl text-white font-medium
            bg-gradient-to-r from-[#3B82F6] to-[#3F7D52]
            shadow-md hover:shadow-lg hover:scale-105 transition"
                    >
                        Contact
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {openMenu && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden mt-4 overflow-hidden"
                    >
                        <div className="flex flex-col gap-3 text-slate-700 font-medium">
                            {navItems.map((item) => (
                                <span
                                    key={item}
                                    className="p-2 rounded-lg hover:bg-blue-50 hover:text-[#3B82F6] transition"
                                >
                                    {item}
                                </span>
                            ))}

                            <button
                                className="mt-2 px-4 py-2 rounded-xl text-white font-medium
                bg-gradient-to-r from-[#3B82F6] to-[#3F7D52]"
                            >
                                Contact
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}