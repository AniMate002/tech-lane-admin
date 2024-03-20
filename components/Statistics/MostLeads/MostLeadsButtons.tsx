


const MostLeadsButtons = () => {
    return (
        <div className="mt-4 flex flex-col gap-2">
            <button className="w-full bg-blue-500 text-white py-2 rounded-xl flex items-center gap-2 justify-center hover:bg-blue-400 transition-all duration-200">
                <span>Preview</span>
                <i className="fa-solid fa-up-right-from-square text-sm"></i>
            </button>
            <button className="w-full bg-blue-100 text-blue-500 py-2 rounded-xl flex items-center gap-2 justify-center hover:bg-blue-200 transition-all duration-200">
                <span>Primary</span>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
}
 
export default MostLeadsButtons;