
"use client";
import { motion, easeInOut } from 'framer-motion'

interface ILineProgress {
    title?: string;
    percentage: number;
    color?: string
}

/**@param 
 * color tailwind
 * percentage : number
 * @description
 * Simple animated progress line
 */
const LineProgress: React.FC<ILineProgress> = (props) => {

    // control the color based on percentage value
    function colorControl (value: number) {
        if (props.percentage < 50) {
            return '#323232'
        } else if (props.percentage >= 50 && props.percentage < 79) {
            return '#424242';
        } else {
            return '#6A6A6A';
        }
    }

    return (
        <div className={`grid grid-cols-2 gap-4 w-full`}>

            <div className={`flex flex-row justify-between`}>

            {props.title && <div className={`mr-2`}>{props.title}</div>}
            <div className="font-bold mr-2">{ props.percentage }%</div>
            </div>

            <motion.div
                
                initial={{opacity: 0}}
                animate={{ opacity: 1 }}
                className={`w-full bg-transparent h-4 m-1`}>
                
                <motion.div
                     initial={{
                        opacity: 1,
                        width: 0,
                        backgroundColor: colorControl(0)
                    }}

                    whileInView={{
                        opacity: 1,
                        width: props.percentage + "%",
                    }}
    
                    viewport={{ once: false, amount: 0.2 }}

                    transition={{
                        duration: 1,
                        ease: easeInOut,
                        delay: .70
                    }}
                    className={`${props.color ? props.color : "bg-green-500"}  h-4`}>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default LineProgress;