import { cabin } from "@/app/layout";
import { IMedia } from "@/components/Data";

interface MeidaCardProps extends IMedia {}

function chooseRandomColor(): string{
    const allColors = ['#44b2f2', '#ff72c2', '#f2444a', '#f29e44']
    const index = Math.round(Math.random() * (allColors.length - 1))
    return allColors[index]
}



const MeidaCard:React.FC<MeidaCardProps> = ({ color, companySubtitle, companyTitle, date, icon, id, name, time, status, description}) => {
    const titleStyles = 'font-bold text-slate-500 text-md'
    const subTitleStyles = 'text-slate-400 text-[12px]'
    const statusColors = {
        'Active': '125,230,105',
        'Closed': '255,131,110',
        'Posed': '98,173,234',
        'Ending': '223,200,109'
    }
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4 w-[35%]">
                <div style={{backgroundColor: color}} className="flex items-center justify-center h-[60px] w-[60px] rounded-lg text-white text-3xl">
                    <i className={`fa-brands fa-${icon}`}></i>
                </div>
                <div>
                    <h5 className={cabin.className + " " + titleStyles}>{name}</h5>
                    <p style={{color: chooseRandomColor()}} className="text-sm font-bold">{description}</p>
                </div>
            </div>
            <div className="w-[15%]">
                <p className={titleStyles}>{time}</p>
                <p className={subTitleStyles}>{date}</p>
            </div>
            <div className="w-[20%]">
                <p className={titleStyles}>{companyTitle}</p>
                <p className={subTitleStyles}>{companySubtitle}</p>
            </div>
            <p style={{color: `rgb(${statusColors[status]})`, backgroundColor: `rgba(${statusColors[status]}, 0.1)`}} className="w-[15%] max-w-fit px-4 py-1 rounded-lg">{status}</p>
        </div>
    );
}
 
export default MeidaCard;