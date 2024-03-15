"use client"
import { useSession } from "next-auth/react";
import HeaderButtons from "./HeaderButtons";
import HeaderInput from "./HeaderInput";
import HeaderAccount from "./HeaderAccount";
import { IUser } from "@/models/User";
import ShowBurgerBtn from "../Navigation/ShowBurgerBtn";


const Header = () => {
    const session = useSession()
    return (
        <header className=" bg-blue-600 h-[300px] pt-5 px-10 flex items-start justify-between
        ">  
            <ShowBurgerBtn />
            <HeaderInput />
            {
                session.status === 'authenticated'
                ? <HeaderAccount user={session.data.user as IUser}/>
                : <HeaderButtons />
            }
        </header>
    );
}
 
export default Header;