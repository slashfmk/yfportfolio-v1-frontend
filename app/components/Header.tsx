"use client";

import Image from 'next/image'
import profilePic from '../assets/images/yfprofile.jpg'
import { FaArrowAltCircleDown, FaWindows } from 'react-icons/fa';
import Button from './Button';
import ToTop from './ToTup';

import PageProgressBar from './PageProgressBar';
import MainMenu from './MainMenu';


function Header() {

    return (

        <header className={`w-full flex justify-center px-6 sm:px-0 md:px-6`} id={`header`}>

            <div className={` w-full  fixed p-3 z-20`}>

                <div className="flex flex-row justify-between">
                    <div className="logo"><FaWindows size={25} /></div>
                    <MainMenu />
                </div>

            </div>

            <PageProgressBar />

            {/* Menu pop over */}


            {/* Top bar stuff */}


            <div className={`w-[1080px] my-[45px]`}>

                {/* To the top button here */}
                <ToTop />

                <p className="text-4xl font-light text-center sm:text-left">Hey! My name is</p>

                <h1 className={`text-6xl sm:text-7xl font-black gradient-main text-center sm:text-left leading-tight`}>Yannick Fumukani</h1>

                <div className={`flex sm:flex-row md:gap-4 gap-48  flex-col-reverse`}>

                    <div className={`flex flex-col gap-5 align-middle justify-between`}>
                        <h2 className={`text-4xl font-light text-gray-200 `}>Software Engineer & UI/UX Designer</h2>

                        <div>

                            <h2 className={`text-5xl gradient-main font-extrabold text-center sm:text-left text-gray-200 mb-4`}>Who Am I?</h2>
                            <div className="">
                                I am a US based software engineer graduated from Iowa State University.
                                I have a passion for creating innovative solutions to complex problems and have worked on a variety of projects.
                            </div>
                        </div>

                        <Button href={`/YF-redone-Resume.pdf`} target={`_blank`}>
                            <p>My Resume</p>
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