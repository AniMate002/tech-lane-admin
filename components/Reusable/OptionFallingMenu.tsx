


const OptionFallingMenu = ({icon, title}:{icon: string, title: string}) => {
    return (
        <span key={title} className="flex items-center gap-2 hover:bg-blue-50 px-4 py-2 rounded-xl w-full">
            <i className={icon}></i>
            <span>{title}</span>
        </span>
    );
}
 
export default OptionFallingMenu;