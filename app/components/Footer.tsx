import { FaBehance, FaFacebookF, FaGithub, FaGlobeAmericas, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Section from "./Section";
import Link from "next/link";


function Footer() {

    const iconSize = 17;

    return (

        <section
            id={`footer`}
            className={`w-full flex justify-center bg-[#101010] mb-0 pt-11`}>

            <div className={`w-[1080px] mb-10 px-3 sm:px-0 md:px-6`}>

                <div className={`flex flex-row gap-5`}>
                    <Link href={"https://www.facebook.com/slashfmk"} target="_blank">
                        <FaFacebookF size={iconSize} className={`hover:text-blue-600 transition-all duration-500`} />
                    </Link>
                    <Link href={"#"} target="_blank">
                        <FaTwitter size={iconSize} className={`hover:text-blue-400 transition-all duration-500`} />
                    </Link>
                    <Link href={`https://www.instagram.com/slashfmk/`} target="_blank">
                        <FaInstagram size={iconSize} className={`hover:text-pink-700 transition-all duration-500`} />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/yannick-fumukani-a894589b/"} target="_blank">
                        <FaLinkedinIn size={iconSize} className={`hover:text-blue-600 transition-all duration-500`} />
                    </Link>
                    <Link href={"https://github.com/slashfmk"} target="_blank">
                        <FaGithub size={iconSize} className={`hover:text-slate-600 transition-all duration-500`} />
                    </Link>
                    <Link href={`https://www.behance.net/slashfmk`} target="_blank">
                        <FaBehance size={iconSize} className={`hover:text-slate-600 transition-all duration-500`} />
                    </Link>
                </div>

                <div className={`border-t-[1px] border-[#515050] mb-0 mt-6 py-10 text-xsm`}>

                    <div className={`flex flex-row flex-wrap justify-between`}>

                        <p> &copy;  Copyright 2023 - Designed and built by Yannick Fumukani</p>

                        <div className={`flex flex-row gap-3`}>
                            <FaGlobeAmericas size={19} />
                            <div>United States</div>
                        </div>

                    </div>


                </div>

            </div>

        </section>

    )
}


export default Footer;