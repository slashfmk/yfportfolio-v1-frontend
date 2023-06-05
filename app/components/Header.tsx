"use client";

import Image from 'next/image'
import profilePic from '../assets/images/yfprofile.jpg'
import { FaArrowAltCircleDown } from 'react-icons/fa';
import ToTop from './ToTup';

import PageProgressBar from './PageProgressBar';

import MainMenu from './MainMenu';
import Link from 'next/link';

import Head from 'next/head';


function Header() {

    return (
        <>
            <Head key={1}>
                <title>Yannick Fumukani official website</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <PageProgressBar />
            <MainMenu />
            <header className={`w-full flex justify-center px-6 sm:px-0 md:px-6`} id={`header`}>

                {/* <div className={`w-full  fixed p-3 z-20`}>

                    <div className="flex flex-row justify-between">
                        <div className="logo opacity-1"><FaWindows size={25} /></div>
                      
                    </div>

                </div> */}

                <div className={`w-[1080px] my-[45px]`}>

                    {/* To the top button here */}
                    <ToTop />

                    <p className="text-4xl font-light text-center sm:text-left">Hey! My name is</p>

                    <h1 className={`text-6xl sm:text-7xl font-black gradient-main text-center sm:text-left leading-tight`}>Yannick Fumukani</h1>

                    <div className={`flex sm:flex-row md:gap-4 gap-48  flex-col-reverse`}>

                        <div className={`flex flex-col gap-5 align-middle justify-between`}>
                            <h2 className={`text-4xl font-light text-gray-200 text-center sm:text-left `}>Software Engineer & UI/UX Designer</h2>

                            <div>

                                <h2 className={`text-5xl gradient-main font-extrabold text-center sm:text-left text-gray-200 mb-4`}>Who Am I?</h2>
                                <div className="">
                                    I am a US based software engineer graduated from Iowa State University.
                                    I have a passion for creating innovative solutions to complex problems and have worked on a variety of projects.
                                </div>
                            </div>

                            <div className={`self-center sm:self-start`}>

                                <Link href={`/YF-redone-Resume.pdf`} target={`_blank`} download>
                                    <button
                                        className={`bg-[#101010] 
                                    hover:bg-green-600 hover:text-white transition-all duration-700
                                    p-7 rounded-lg flex flex-row gap-6 justify-center my-2 w-full
                                    sm:max-w-xs self-center`}>
                                        Download Resume <FaArrowAltCircleDown size={20} /></button>
                                </Link>
                            </div>

                        </div>

                        <Image
                            className={`rounded-full border-8 m-1 sm:m-2 self-center`}
                            width={500}
                            height={500}
                            alt={`Yannick Slash Fumukani`}
                            src={profilePic}
                            priority={true}
                        />

                    </div>
                </div>

            </header>
        </>
    )
}

export default Header;