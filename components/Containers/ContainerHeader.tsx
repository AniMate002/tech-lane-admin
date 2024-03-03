
interface ContainerHeaderProps {
    title: string
}

const ContainerHeader:React.FC<ContainerHeaderProps> = ({ title }) => {
    return (
        <div>
            <h4 className='text-2xl text-slate-500'>{title}</h4>
            <hr className='my-4'/>
        </div>
    );
}
 
export default ContainerHeader;