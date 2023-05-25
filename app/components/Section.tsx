
interface ISection {
    title: string;
    description?: string;
    position?: "left" | "right" | "center";
    children?: React.ReactNode;
    id: string;
}


function Section(props: ISection) {
    return (
        <section className={`w-full flex justify-center my-16`} id={props.id}>
            <div className={`w-[1080px] mb-10 px-3 sm:px-0`}>

                <h2 className={`text-5xl font-extrabold text-gray-200 mb-2 text-center`}>{props.title}</h2>
                <p className={`text-sm mb-8 text-center`}>{props.description && props.description}</p>

                {props.children}

            </div>
        </section>
    )
}

export default Section;