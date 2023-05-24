import { FaGlobeAfrica } from "react-icons/fa";

interface IService {
    title: string;
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

    return (
        <>
            <div className={`sm:w-[300px] w-full flex flex-row gap-4`}>
                <div className={``}>
                {props.icon}
                </div>
                <div>
                    <h2 className={`text-lg font-bold mb-3 text-slate-100`}>{props.title}</h2>
                    <p className={`text-left`}>{props.children}</p>
                </div>

            </div>
        </>
    )
}

export default Service;