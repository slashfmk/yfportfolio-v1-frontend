"use client";

import Image from 'next/image'
import profilePic from '../assets/images/yfprofile.jpg'
import { FaArrowAltCircleDown, FaBars, FaPlusCircle, FaWindows } from 'react-icons/fa';
import Button from './Button';
import ToTop from './ToTup';
import { useState } from 'react';
import { AnimatePresence, delay, easeInOut, motion, stagger } from 'framer-motion';
import { useRouter } from 'next/navigation';
import PageProgressBar from './PageProgressBar';


function Header() {

    // Control the menu display
    const [isMenuDisplay, setIsMenuDisplay] = useState<boolean>(false);
    const route = useRouter();

    // close the menu once called
    function closeMenu(address: string) {
        setIsMenuDisplay(false);
        route.push(address);
    }

    // Get the screen width
    const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : null;

    return (

        <header className={`w-full flex justify-center px-6 sm:px-0`} id={`header`}>

            <div className={` w-full  fixed p-3 z-20`}>

                <div className="flex flex-row justify-between">
                    <div className="logo"><FaWindows size={25} /></div>

                    <div className={`cursor-pointer z-50`} onClick={() => { setIsMenuDisplay(!isMenuDisplay) }} >
                        {isMenuDisplay ? <FaPlusCircle size={25} rotate={35} /> : <FaBars size={25} />}
                    </div>
                </div>

            </div>

            <PageProgressBar />

            {/* Menu pop over */}

            <motion.div
                className={`block fixed w-screen h-screen bg-green-500 z-30 text-white font-bold text-2xl`}
                style={{}}

                initial={{ opacity: 1, display: 'none', translateX: `${width}px` }}
                transition={{ ease: "easeInOut", duration: .5 }}
                animate={isMenuDisplay ?
                    { opacity: 1, display: 'block', translateX: '0px' } :
                    { opacity: 1, display: 'block', translateX: `${width}px` }}

                exit={{ opacity: 1, display: 'none', translateX: `${width}px` }}>

                <AnimatePresence >
                    <motion.ul className={`flex flex-col gap-6 h-full justify-center text-center`}>


                        <motion.li
                            className={`cursor-pointer`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: `auto` }}
                            exit={{ opacity: 0, height: 0 }}
                            key={77}
                            onClick={() => { closeMenu("/#header") }}>Who Am I?</motion.li>

                        <motion.li
                            className={`cursor-pointer`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: `auto` }}
                            exit={{ opacity: 0, height: 0 }}
                            key={2} onClick={() => { closeMenu("/#thingsibuild") }}>Things I build</motion.li>

                        <motion.li key={33} onClick={() => { closeMenu("/#skills") }}>My Skills</motion.li>
                        <motion.li key={34} onClick={() => { closeMenu("/#projects") }}>Projects</motion.li>
                        <motion.li key={35} onClick={() => { closeMenu("/#repos") }}>Github repos</motion.li>
                        <motion.li key={36} onClick={() => { closeMenu("/#testimony") }}>Testimony</motion.li>
                        <motion.li key={37} onClick={() => { closeMenu("/#contact") }}>Contacts</motion.li>


                    </motion.ul>
                </AnimatePresence>

            </motion.div>

            {/* Top bar stuff */}
            <div className={`w-[1080px] my-[45px]`}>


                {/* To the top button here */}
                <ToTop />

                <p className="text-4xl font-light text-center sm:text-left">Hello! My name is</p>

                <h1 className={`text-6xl sm:text-7xl font-black gradient-main text-center sm:text-left leading-tight`}>Yannick Fumukani</h1>

                <div className={`flex sm:flex-row gap-48 flex-col-reverse`}>

                    <div className={`flex flex-col gap-5 align-middle justify-between`}>
                        <h2 className={`text-4xl font-light text-gray-200 `}>Software Engineer & UI/UX Designer</h2>

                        <div>

                            <h2 className={`text-5xl gradient-main font-extrabold text-center sm:text-left text-gray-200 mb-4`}>Who Am I?</h2>
                            <div className="text-sm">
                                I am a US based software engineer graduated from Iowa State University.
                                I have a passion for creating innovative solutions to complex problems and have worked on a variety of projects.
                            </div>
                        </div>

                        <Button href={`/YF-redone-Resume.pdf`} target={`_blank`}>
                            <p>Download my resume</p>
                            <FaArrowAltCircleDown size={20} />
                        </Button>

                    </div>

                    <Image
                        className={`rounded-full border-8 m-1 sm:m-2`}
                        width={500}
                        height={500}
                        alt={`Yannick Slash Fumukani`}
                        src={profilePic}
                    />

                </div>
            </div>

        </header>
    )
}

export default Header;