import { motion, useScroll, useSpring } from "framer-motion"

function PageProgressBar() {

    const { scrollYProgress } = useScroll()

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div className={`border-t-[5px] border-t-green-500 fixed top-0 left-1 right-1  z-20 origin-top-left`} style={{ scaleX }}>
            
        </motion.div>
    )
}

export default PageProgressBar;