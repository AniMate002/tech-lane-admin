
import { DetailedHTMLProps, HTMLAttributes } from "react";
import OuterContHeader from "./OuterContHeader";

export interface OuterContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const OuterContainer:React.FC<OuterContainerProps> = ({children}) => {
    return (
        <div className="py-10 bg-[#f5f6ff] mt-[-100px] rounded-xl min-h-[150px]
        mx-0 px-2
        [@media(min-width:560px)]:mx-2
        [@media(min-width:760px)]:mx-10 lg:px-5
        ">
            <OuterContHeader />
            {children}
        </div>
    );
}
 
export default OuterContainer;