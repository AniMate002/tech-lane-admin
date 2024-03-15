import InnerContainer from "../Containers/InnerContainer";


const Loading = ({ title }: {title?: string}) => {
    return (
        <InnerContainer>
            <div className="py-20">
                <div className="flex items-center justify-center text-3xl text-blue-500 gap-4">
                    <h3 className="text-7xl">Loading</h3>
                    <i className="fa-solid fa-circle-notch fa-spin text-5xl"></i>
                </div>
                <h2 className="w-full text-center text-slate-500 font-bold mt-10 text-2xl">{title}</h2>
            </div>
        </InnerContainer>
    );
}
 
export default Loading;