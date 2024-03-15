
import { DetailedHTMLProps, HTMLAttributes } from "react";
import OuterContHeader from "./OuterContHeader";

export interface OuterContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const OuterContainer:React.FC<OuterContainerProps> = ({children}) => {
    return (
        <div className="py-10 px-5 bg-[#f5f6ff] mt-[-100px] rounded-xl min-h-[150px]
        mx-2
        lg:mx-10
        ">
            <OuterContHeader />
            {children}
        </div>
    );
}
 
export default OuterContainer;