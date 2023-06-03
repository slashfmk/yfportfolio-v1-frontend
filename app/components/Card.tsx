
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaAndroid, FaApple, FaChevronCircleDown, FaExternalLinkAlt, FaExternalLinkSquareAlt, FaEye, FaGithub } from "react-icons/fa";
import Link from "next/link";


interface ICard {
    id: number;
    title: string;
    url?: string;
    github_url?: string;
    playStore_url?: string;
    appStore_url?: string;
    description: string;
    image_url: string;
    technology_used: string;
    isDone: boolean;
}

function Card(props: ICard) {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <>

            <motion.div
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}

                className={`bg-cover bg-center overflow-clip w-full h-52 rounded-lg mb-2`}

                initial={{
                    backgroundSize: `100%`,
                    scale: 0,
                    opacity: 1
                }}

                animate={
                    isHovered ? { backgroundSize: `200%` } : { backgroundSize: `100%` }
                }

                whileInView={{
                    opacity: 1,
                    scale: 1
                }}

                viewport={{ once: false, amount: 0.2 }}

                style={{
                    backgroundImage: `url(${props.image_url})`,
                    backgroundRepeat: "no-repeat",

                }}>


                <motion.div
                    className={`w-full h-full flex flex-col justify-center text-slate-50`}

                    animate={
                        isHovered ?
                            { backgroundColor: `rgba(0, 95, 91, 0.7)` } :
                            { backgroundColor: `rgba(0, 0, 12, 0.4)` }}>


                    <motion.div

                        animate={isHovered ?
                            { translateY: `-50px`, opacity: 0 } :
                            { translateY: `40px`, opacity: 1 }}>

                        <p className={`text-2xl font-bold text-center text-slate-200 `}>{props.title}</p>
                        {/* {props.url && <p className={`text-center`}>{props.url}</p>} */}
                        {
                            !props.isDone &&
                            <p className="text-yellow-500 mt-1 rounded-xl self-center text-center">
                                {`In construction`}
                            </p>
                        }

                    </motion.div>

                    {/* show when above is hidden */}
                    <motion.div
                        animate={isHovered ?
                            { translateY: `-30px`, opacity: 1 } :
                            { translateY: `70px`, opacity: 0 }}

                        className={`text-center text-xsm px-2 relative top-4`}>

                        <h2 className={``}>{props.description && props.description}</h2>
                        <h2 className={`font-bold mt-2`}>built with:</h2>
                        {props.technology_used}

                        <div className={`flex flex-row gap-3 justify-center mt-2`}>
                            {
                                props.url && <Link href={props.url} target="_blank" ><FaExternalLinkAlt size={25} /></Link>
                            }

                            {
                                props.github_url && <Link href={props.github_url} target="_blank"><FaGithub size={25} /></Link>
                            }

                            {
                                props.playStore_url && <Link href={props.playStore_url} target="_blank"><FaAndroid size={25} /></Link>
                            }
                            {
                                props.apple_store && <Link href={props.apple_store} target="_blank"><FaApple size={25} /></Link>
                            }


                        </div>
                    </motion.div>

                    {/* <FaChevronCircleDown size={30} className={` self-center`} /> */}

                </motion.div>

            </motion.div>

            {/* Details */}

        </>
    )
}

export default Card;