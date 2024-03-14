import Link from "next/link";


const LinkBox = ({ title, href, svg}: {title: string, href: string, svg: string}) => {
    return (
        <Link href={href} className="w-[50%] h-[100px] flex items-center justify-center flex-col hover:bg-blue-500 hover:text-white text-slate-500 rounded-xl transition-all duration-200">
            <i className={svg}></i>
            <span className="">{title}</span>
        </Link>
    );
}
 
export default LinkBox;