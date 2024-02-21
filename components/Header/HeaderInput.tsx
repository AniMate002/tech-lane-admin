import { nunito } from "@/app/layout";


const HeaderInput = () => {
    return (
        <div className="flex items-center gap-2 bg-blue-500 w-fit px-4 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text" placeholder="Search here..." className={`${nunito.className} bg-transparent focus:outline-none text-white placeholder:text-white`}/>
        </div>
    );
}
 
export default HeaderInput;