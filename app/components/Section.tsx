
"use client";

import { motion } from "framer-motion";

interface ISection {
    title: string;
    description?: string;
    position?: "left" | "right" | "center";
    children?: React.ReactNode;
    id: string;
}


function Section(props: ISection) {

    const pos = () => {
        if (!props.position) return `0px`;
        return props.position === 'left' ? `-100xpx` : `100px`;
    }
    
    return (
        <section className={`w-full flex justify-center my-16`} id={props.id}>
            <motion.div
                
                initial={{ opacity: 0, translateX: pos() }}
                whileInView={{ opacity: 1, translateX: '0px' }}
                viewport={{ once: false, amount: 0.2 }}

                className={`w-[1080px] mb-10 px-3 sm:px-0`}>

                <h2 className={`text-5xl font-extrabold text-gray-200 mb-2 text-center gradient-main`}>{props.title}</h2>
                <p className={`mb-8 text-center`}>{props.description && props.description}</p>

                {props.children}
            </motion.div>
        </section>
    )
}

export default Section;