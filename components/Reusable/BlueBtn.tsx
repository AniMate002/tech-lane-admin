import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface BlueBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

const BlueBtn:React.FC<BlueBtnProps> = ({children, className, ...props}) => {
    return (
        <button {...props} className={`text-white rounded-md bg-blue-500 px-8 py-4 flex items-center gap-2 hover:bg-blue-400 transition-all duration-200 ${className}`}>
            { children }
        </button>
    );
}
 
export default BlueBtn;