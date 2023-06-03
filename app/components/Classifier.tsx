import LineProgress from "../LineProgress";

interface IClassifier {
    title: string;
    children: React.ReactNode;
}

function Classifier(props: IClassifier) {
    
    return (
        <div className={`flex flex-col gap-1 w-full`}>
            <h2 className={`font-normal mb-3 text-lg`}>{props.title}</h2>
        {props.children}

      </div>
    )
}

export default Classifier;