import { nunito } from "@/app/layout";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InnerContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title?: string,
    className?: string
}


const InnerContainer:React.FC<InnerContainerProps> = ({title, children, className, ...props}) => {
    return (
        <div {...props} className={nunito.className + " px-10 py-5 bg-white rounded-xl " + className}>
            {title ? 
            <div>
                <h4 className="text-slate-500 text-2xl mb-4">{title}</h4>
                <hr />
            </div>
                :
                ''
            }
            { children }
        </div>
    );
}
 
export default InnerContainer;