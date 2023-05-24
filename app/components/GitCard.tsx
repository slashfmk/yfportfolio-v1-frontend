import Link from "next/link";

interface IGitCard {
    id: number;
    name: string;
    description?: string;
    language: string;
    url: string;
}

function GitCard(props: IGitCard) {

    return (
        <Link href={props.url} target="_blank">
            <div className={`bg-[#101010] p-3 mb-2 rounded-md text-gray-400 w-full flex flex-row gap-44 flex-wrap hover:bg-green-600 hover:text-white transition-all duration-300`}>

                <div>
                    <h3>{props.name}</h3>
                    <h3 className={`text-xsm`}>[ {props.language} ]</h3>
                </div>
                {/* <p className={`w-96`}>{props.description ? props.description : `No description available for this repo`}</p> */}
            </div>
        </Link>
    )
}

export default GitCard;