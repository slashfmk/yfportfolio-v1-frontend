import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Section from "./Section";
import Link from "next/link";


function Footer() {

    const iconSize = 17;

    return (

        <section className={`w-full flex justify-center bg-[#000000] mb-0 pt-11`}>

            <div className={`w-[1080px] mb-10 px-3 sm:px-0`}>

                <div className={`flex flex-row gap-5`}>
                    <Link href={"#"} target="_blank">
                        <FaFacebookF size={iconSize} className={`hover:text-blue-600`} />
                    </Link>
                    <Link href={"#"} target="_blank">
                        <FaTwitter size={iconSize} className={`hover:text-blue-400`} />
                    </Link>
                    <Link href={"#"} target="_blank">
                        <FaInstagram size={iconSize} className={`hover:text-pink-700`} />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/yannick-fumukani-a894589b/"} target="_blank">
                        <FaLinkedinIn size={iconSize} className={`hover:text-blue-600`} />
                    </Link>
                    <Link href={"https://github.com/slashfmk"} target="_blank">
                        <FaGithub size={iconSize} className={`hover:text-slate-600`} />
                    </Link>
                </div>

                <div className={`border-t-[1px] border-[#515050] mb-0 mt-6 py-10 text-xsm`}>
                    Copyright 2023 - Yannick Slash Fumukani
                </div>

            </div>

        </section>

    )
}


export default Footer;