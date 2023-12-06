import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

function ToTop() {

    return (
        <Link href={'#header'}>
            <div
                className={`block bg-green-500 
                rounded-full p-7 w-14 h-14
                bottom-12 right-12 fixed z-10
                transition-all
                duration-600
                opacity-[0.4] hover:opacity-[1]`}>
                <FaArrowUp size={25} className={`text-white relative top-[-15px] left-[-12px]`} />
            </div>
        </Link>
    )
}

export default ToTop;