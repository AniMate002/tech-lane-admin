import { IMedia } from "@/components/Data";
import { Nunito, Cabin, Inter } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

interface MeidaCardProps extends IMedia {}

function chooseRandomColor(): string{
    const allColors = ['#44b2f2', '#ff72c2', '#f2444a', '#f29e44']
    const index = Math.round(Math.random() * (allColors.length - 1))
    return allColors[index]
}



const MeidaCard:React.FC<MeidaCardProps> = ({ color, companySubtitle, companyTitle, date, icon, id, name, time, status, description}) => {
    const titleStyles = 'font-bold text-slate-500 md:text-md text-[12px]'
    const subTitleStyles = 'text-slate-400 md:text-[12px] text-[10px]'
    const statusColors = {
        'Active': '125,230,105',
        'Closed': '255,131,110',
        'Posed': '98,173,234',
        'Ending': '223,200,109'
    }
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4 md:w-[35%] w-[45%]">
                <div style={{backgroundColor: color}} className="flex items-center justify-center md:h-[60px] md:w-[60px] w-[40px] h-[40px] rounded-lg text-white md:text-3xl text-sm">
                    <i className={`fa-brands fa-${icon}`}></i>
                </div>
                <div>
                    <h5 className={cabin.className + " " + titleStyles}>{name}</h5>
                    <p style={{color: chooseRandomColor()}} className="md:text-sm text-[10px] font-bold">{description}</p>
                </div>
            </div>
            <div className="w-[15%] md:block hidden">
                <p className={titleStyles}>{time}</p>
                <p className={subTitleStyles}>{date}</p>
            </div>
            <div className="w-[20%]">
                <p className={titleStyles}>{companyTitle}</p>
                <p className={subTitleStyles}>{companySubtitle}</p>
            </div>
            <p style={{color: `rgb(${statusColors[status]})`, backgroundColor: `rgba(${statusColors[status]}, 0.1)`}} className="md:w-[18%] w-[25%] max-w-fit md:px-4 py-1 px-1 md:text-base text-sm rounded-lg">{status}</p>
        </div>
    );
}
 
export default MeidaCard;