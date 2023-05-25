import Image from 'next/image'
import profilePic from '../assets/images/yfprofile.jpg'
import { FaArrowAltCircleDown, FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';


function Header() {
    return (

        <header className={`w-full flex justify-center px-6 sm:px-0`} id={`header`}>

            <div className={`w-[1080px] mb-8`}>

                <div className="logo">Logo</div>
                <p className="text-5xl font-black text-stroke text-center sm:text-left">Hello! My name is</p>

                <h1 className={`text-6xl sm:text-7xl font-black gradient-main text-center sm:text-left leading-tight`}>Yannick Fumukani</h1>

                <div className={`flex sm:flex-row gap-48 flex-col-reverse`}>

                    <div className={`flex flex-col gap-5 align-middle justify-between`}>
                        <h2 className={`text-4xl font-light text-gray-200 `}>Software Engineer & UI/UX Designer</h2>

                        <div>

                            <h2 className={`text-5xl font-extrabold text-gray-200 mb-4`}>Who Am I?</h2>
                            <div className="text-sm">
                                I am a US based software engineer graduated from Iowa State University.
                                I have a passion for creating innovative solutions to complex problems and have worked on a variety of projects.
                            </div>
                        </div>

                        <Link href={'../assets/files/YF-redone-Resume.pdf'} target='_blank' download>
                        
                        <div className={`bg-[#101010] hover:bg-blue-600 transition-all duration-500 cursor-pointer  w-64 p-6 text-sm text-gray-200 rounded-md font-semibold flex flex-row gap-4 justify-center align-middle`}>
                                <p>Download my resume</p>
                                <FaArrowAltCircleDown size={20} />
                            </div>
                            </Link>

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