
"use client";

import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPlusCircle, FaBars, FaSort } from "react-icons/fa";


function MainMenu() {

    // Get the screen width
    const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : null;

    // Control the menu display
    const [isMenuDisplay, setIsMenuDisplay] = useState<boolean>(false);
    const route = useRouter();


    // close the menu once called
    function closeMenu(address: string) {
        setIsMenuDisplay(false);
        route.push(address);
    }


    return (
        <>

            <div className={`fixed top-6 right-3 cursor-pointer z-50`} onClick={() => { setIsMenuDisplay(!isMenuDisplay) }} >
                {isMenuDisplay ? <FaPlusCircle size={25} className={`rotate-45 text-white`} /> : <FaBars size={25} />}
            </div>

            <motion.div
                className={`block fixed w-full h-screen bg-green-500 z-40 text-white font-bold text-2xl`}

                initial={{ opacity: 1, display: 'none', translateX: `0px` }}
                transition={{ ease: "easeInOut", duration: .5 }}
                animate={isMenuDisplay ?
                    { opacity: 1, display: 'block', translateX: '0px' } :
                    { opacity: 1, display: 'block', translateX: `${width}px` }}

                exit={{ opacity: 0, display: 'none', translateX: `${width}px` }}>

                <AnimatePresence >
                    <motion.ul className={`flex flex-col gap-6 h-full justify-center text-center main-menu`}>

                        <li key={77} onClick={() => { closeMenu("/#header") }}>Who Am I?</li>
                        <li key={32} onClick={() => { closeMenu("/#thingsibuild") }}>Things I build</li>
                        <li key={33} onClick={() => { closeMenu("/#skills") }}>My Skills</li>
                        <li key={34} onClick={() => { closeMenu("/#projects") }}>Projects</li>
                        <li key={35} onClick={() => { closeMenu("/#repos") }}>Github repos</li>
                        <li key={36} onClick={() => { closeMenu("/#testimony") }}>Testimony</li>
                        <li key={37} onClick={() => { closeMenu("/#contact") }}>Contacts</li>

                    </motion.ul>
                </AnimatePresence>

            </motion.div>
        </>
    )
}

export default MainMenu;