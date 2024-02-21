
import { DetailedHTMLProps, HTMLAttributes } from "react";
import OuterContHeader from "./OuterContHeader";

export interface OuterContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const OuterContainer:React.FC<OuterContainerProps> = ({children}) => {
    return (
        <div className="py-10 px-5 bg-[#f5f6ff] mt-[-100px] rounded-xl mx-10 min-h-[150px]">
            <OuterContHeader />
            {children}
        </div>
    );
}
 
export default OuterContainer;