
import { DetailedHTMLProps, HTMLAttributes } from "react";
import OuterContHeader from "./OuterContHeader";

export interface OuterContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    showHeader?: boolean,
    className?: string,
    noMx?: boolean
}

const OuterContainer:React.FC<OuterContainerProps> = ({children, showHeader, className, noMx}) => {
    return (
        <div className={`py-10 bg-[#f5f6ff] mt-[-100px] rounded-xl min-h-[150px]
        mx-0 px-2
        [@media(min-width:560px)]:mx-2
        lg:px-5
        ${noMx ? 'mx-0' : '[@media(min-width:760px)]:mx-10 '}
        ${className}
        `}>
            { showHeader 
            ? <OuterContHeader />
            : ""
            }
            {children}
        </div>
    );
}
 
export default OuterContainer;