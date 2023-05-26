import Link from "next/link";

interface IButton {
    href: string;
    children: React.ReactNode
    target?: "_blank";
}


function Button(props: IButton) {
    return (
        <Link href={props.href} target={props.target && props.target} download>

            <div className={`bg-[#101010] hover:bg-blue-600 transition-all duration-500 cursor-pointer  w-64 p-6 text-sm text-gray-200 rounded-md font-semibold flex flex-row gap-4 justify-center align-middle`}>
                {
                    props.children
                }
            </div>
        </Link>
    )
}

export default Button;