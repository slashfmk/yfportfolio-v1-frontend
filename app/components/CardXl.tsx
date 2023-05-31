
import Image from "next/image";

interface ICardXl {
    photoUrl: string;
    children: React.ReactNode;
    author: string;
    company?: string;
}

function CardXl(props: ICardXl) {

    return (


        <div className={`flex flex-col gap-4`}>

            <p className="text-center text-3xl font-bold">&ldquo;
                {props.children}
                &rdquo;
            </p>

            <div className={`self-center`}>
                <Image
                    src={props.photoUrl}
                    width={150} height={150}
                    alt={props.author}
                    className={`rounded-full border-gray-300 border-8`} />
            </div>

            <div>
                <h2 className="text-sm text-center">{props.author}</h2>
                <h2 className="text-lg text-center font-bold">{props.company ?? ''}</h2>
            </div>

        </div>

    )
}

export default CardXl;