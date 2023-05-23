import { FaChevronCircleDown, FaEye } from "react-icons/fa";

interface ICard {
    title: string;
    url?: string;
    github_url?: string;
    description: string;
    image_url: string;
    technology_used: string[];
}

function Card(props: ICard) {

    return (
        <div
            className={`
            sm:w-[350px]
            bg-cover
            bg-center
            overflow-clip
            w-full h-52 rounded-lg mb-2
            `}

            style={{
                backgroundImage: `url(${props.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: `saturation`
            }}>


            <div
                className={`w-full h-full flex flex-col justify-center text-slate-50`}
                style={{
                    backgroundColor: `rgba(88, 95, 91, 0.62)`
                }}>

                {/* <FaEye size={30} className={`self-end`} /> */}
                <p className={`text-2xl font-bold text-center text-slate-200`}>{props.title}</p>
                {props.url && <p className={`text-center`}>{props.url}</p>}
                {/* <FaChevronCircleDown size={30} /> */}
            </div>

        </div>
    )
}

export default Card;