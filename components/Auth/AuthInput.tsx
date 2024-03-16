import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface AuthInputProsp extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    svgCode: string,
    className?: string
}

const AuthInput:React.FC<AuthInputProsp> = ({ svgCode, className, ...props}) => {
    return (
        <label className={"flex items-center gap-4 border-b-2 text-slate-400 border-slate-400 pb-4 w-full focus-within:text-blue-400 transition-all duration-200" + className}>
            <i className={`${svgCode}  sm:text-3xl text-lg`}></i>
            <input className="text-black sm:text-base text-sm" {...props}/>
        </label>
    );
}
 
export default AuthInput;