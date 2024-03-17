
interface GreyContainerProps{
    children?: React.ReactNode
    className?: string
}

const GreyContainer:React.FC<GreyContainerProps> = ({ children, className }) => {
    return (
        <div className={"bg-[#f5f6ff] rounded-xl " + className}>
            { children }
        </div>
    );
}
 
export default GreyContainer;