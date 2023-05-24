import LineProgress from "../LineProgress";

interface IClassifier {
    title: string;
    children: React.ReactNode;
}

function Classifier(props: IClassifier) {
    
    return (
        <div className={`flex flex-col gap-3 sm:w-[350px] w-full`}>
            <h2 className={`font-bold mb-3`}>{props.title}</h2>
        {props.children}

      </div>
    )
}

export default Classifier;