"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGlobeAfrica } from "react-icons/fa";

interface IService {
    title: string;
    details: React.ReactNode;
    children: string;
    icon: React.ReactNode;
}


/**
 * Service component for providing info of what i can do
 * @param title: string
 * @param description: string
 * @param icon: icons [ReactNode]
 */
function Service(props: IService) {

    const [isHover, setIsHover] = useState<boolean>(false);

    return (

        <motion.div className={`sm:w-[300px] w-full flex flex-row gap-4`}
            onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
            <motion.div className={`hover:text-green-500 self-center`}
                initial={{ opacity: 0, translateX: 2 }}
                animate={{ opacity: 1, translateX: 0 }}
            >
                {props.icon}
            </motion.div>

            <div>

                <h2 className={`text-lg font-bold mb-3 text-slate-100`}>{props.title}</h2>

                <motion.div className={``}
                    initial={{opacity: 1}}
                    animate={isHover ? { translateY: 20, opacity: 0 } : { translateY: 0, opacity: 1 }}>
                    <p className={`text-left`}>{props.children}</p>
                </motion.div>

                <motion.div
                      initial={{opacity: 0}}
                    animate={isHover ? { translateY: 0, opacity: 1 } : { translateY: 20, opacity: 0 }}>
                    {props.details}
                </motion.div>

            </div>

        </motion.div>

    )
}

export default Service;