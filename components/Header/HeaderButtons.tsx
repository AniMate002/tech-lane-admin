import Link from "next/link";


const HeaderButtons = () => {
    return (
        <div className="flex items-center gap-2">
            <Link href={'/signup'} className="text-white px-4 py-2 rounded-xl bg-blue-500">Sign up</Link>
            <Link href={'/login'} className="text-white px-2">Log in</Link>
        </div>
    );
}
 
export default HeaderButtons;