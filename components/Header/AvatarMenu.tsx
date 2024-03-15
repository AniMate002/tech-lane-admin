import { IUser } from "@/models/User";
import Link from "next/link";
import LinkBox from "./LinkBox";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface AvatarMenuProps {
    user: { name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; } | undefined,
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const AvatarMenu:React.FC<AvatarMenuProps> = ({ user, setShowMenu }) => {
    const subTitleClass: string = 'uppercase text-slate-500 font-bold text-sm'
    const linkClass: string = 'uppercase text-blue-500 font-semibold text-sm hover:text-white transition-all duration-200'
    function hideMenuHandler(e: any){
        e.stopPropagation()
        setShowMenu(false)
    }
    return (
        <div className="absolute z-20 right-0 top-12 text-white rounded-xl w-fit bg-slate-800 px-10 py-4">
            <div className="flex items-center justify-between gap-16">
                <div className="flex items-center gap-4 flex-shrink-0 w-[60%]">
                    <div className="overflow-hidden min-h-[40px] min-w-[40px] max-h-[40px] max-w-[40px] rounded-full">
                        <Image width={40} height={40} src="https://images.pexels.com/photos/12493890/pexels-photo-12493890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
                    </div>
                    <div>
                        <h5 className="font-bold text-md">{user?.name}</h5>
                        <p className="text-sm font-bold text-slate-300">{user?.email}</p>
                    </div>
                </div>
                <button onClick={() => signOut()} className="px-4 py-2 font-bold text-sm bg-blue-500 rounded-full flex-shrink-0 transition-all duration-200 hover:bg-blue-400">Signout</button>
            </div>
            <div className="bg-slate-700 rounded-lg mt-4 px-4 py-4 flex flex-col gap-4">
                <p className={subTitleClass}>Activity</p>
                <Link href={'/'} className={linkClass}>Chat</Link>
                <Link href={'/'} className={linkClass}>Recover Password</Link>
                <p className={subTitleClass}>My account</p>
            </div>
            <div className="flex mt-2">
                <LinkBox href="/" title="Message Inbox" svg="fa-solid fa-envelope-open-text"/>
                <LinkBox href="/" title="Support Tickets" svg="fa-solid fa-ticket"/>
            </div>
            <button onClick={e => hideMenuHandler(e)} className="text-slate-500 origin-center bg-slate-700 px-4 py-2 rounded-lg mx-auto block mt-2 w-full hover:bg-slate-600  hover:text-white transition-all duration-200">
                <span>Close</span>
            </button>
        </div>
    );
}
 
export default AvatarMenu;