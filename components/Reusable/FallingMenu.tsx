

const FallingMenu = ({show, children}: {show: boolean, children?: React.ReactNode}) => {
    return (
        <div id="falling_menu" onBlurCapture={() => alert("blur")} style={{boxShadow: "0 0 20px #e2e8f0"}} className={`absolute bottom-[-60px] z-20 right-0 p-2 w-[170px] text-slate-500 bg-white rounded-xl ${show ? "absolute" : "hidden"}`}>
            { children }
        </div>
    );
}
 
export default FallingMenu;