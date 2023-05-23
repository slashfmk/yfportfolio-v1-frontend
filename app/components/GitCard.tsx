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
            <div className={`bg-blue-700 px-3 py-1 mb-2 rounded-md text-slate-200`}>
                <h3>{props.name}</h3>
                {/* <p className={``}>{props.description}</p> */}
                <h3 className={`text-xsm`}>[ {props.language} ]</h3>
            </div>
        </Link>
    )
}

export default GitCard;