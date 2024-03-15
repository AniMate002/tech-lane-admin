import InnerContainer from "../Containers/InnerContainer";


const ErrorComponent = ({ errorMessage }: {errorMessage?: string}) => {
    return (
        <InnerContainer>
            <div className="py-20">
                <div className="flex items-center justify-center text-3xl text-blue-500 gap-4">
                    <h3 className="text-7xl">Ooops... Error</h3>
                    <i className="fa-solid fa-bomb"></i>
                </div>
                <h2 className="w-full text-center text-slate-500 font-bold mt-10 text-2xl">{errorMessage}</h2>
            </div>
        </InnerContainer>
    );
}
 
export default ErrorComponent;