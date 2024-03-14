"use client"
import { useSession } from "next-auth/react";
import HeaderButtons from "./HeaderButtons";
import HeaderInput from "./HeaderInput";


const Header = () => {
    const session = useSession()
    return (
        <header className=" bg-blue-600 h-[300px] pt-5 px-10 flex justify-between items-start">
            <HeaderInput />
            {/* <HeaderAccount /> */}
            <HeaderButtons />
        </header>
    );
}
 
export default Header;