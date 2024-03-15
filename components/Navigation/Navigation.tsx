import Link from "next/link";
import NavLinks from "./NavLinks";
import HideMenuBtn from "./HideMenuBtn";

const Navigation = () => {
    
    return (
        <aside className="gsap_navigation_menu min-h-[100%] pr-10 flex-shrink-0 min-w-[300px]
        fixed bg-white z-20 right-full
        lg:block lg:shadow-slate-200 lg:shadow-2xl lg:opacity-[1] lg:static
        ">
            <HideMenuBtn />
            <Link href={'/'} className="flex items-center gap-2 pt-10 pl-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
                <h1 className="font-bold text-blue-700 text-2xl tracking-tighter">Tech Lane Admin</h1>
            </Link>
            <NavLinks />
        </aside>
    );
}
 
export default Navigation;