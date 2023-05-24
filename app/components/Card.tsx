
"use client";

import { useState } from "react";
import { FaChevronCircleDown, FaEye } from "react-icons/fa";

import { motion } from "framer-motion";


interface ICard {
    id: number;
    title: string;
    url?: string;
    github_url?: string;
    description: string;
    image_url: string;
    technology_used: string;
}

function Card(props: ICard) {

    const [over, setOver] = useState<boolean>(false);

    return (
        <>

            <motion.div
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}

                className={`sm:w-[350px] bg-cover bg-center overflow-clip w-full h-52 rounded-lg mb-2`}

                initial={{
                    backgroundSize: `100%`,
                    opacity: 1
                }}

                animate={
                    over ? { backgroundSize: `200%` } : { backgroundSize: `100%` }
                }

                style={{
                    backgroundImage: `url(${props.image_url})`,
                    backgroundRepeat: "no-repeat",
                    cursor: `pointer`
                }}>


                <motion.div
                    className={`w-full h-full flex flex-col justify-center text-slate-50`}

                    animate={
                        over ?
                            { backgroundColor: `rgba(88, 95, 91, 0.62)` } :
                            { backgroundColor: `rgb(120, 30, 80, .7)` }}
                >


                    {/* <FaEye size={30} className={`self-end`} /> */}
                    <p className={`text-2xl font-bold text-center text-slate-200`}>{props.title}</p>

                    {props.url && <p className={`text-center`}>{props.url}</p>}

                    <motion.p
                        
                        animate={
                            over ? { translateY: `0px` } : { translateY: `5px` }
                        }

                        className={`text-center text-xsm`}>
                        {props.technology_used}
                    </motion.p>
                    {/* <FaChevronCircleDown size={30} className={` self-center`} /> */}

                </motion.div>

            </motion.div>

            {/* Details */}

        </>
    )
}

export default Card;