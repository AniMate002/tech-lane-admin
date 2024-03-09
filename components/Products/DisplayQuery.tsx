import InnerContainer from "../Containers/InnerContainer";


const DisplayQuery = ({ title, length }: {title: string | null, length: number}) => {
    return (
        <InnerContainer className="mt-4">
            <h2 className="font-bold text-slate-500">{length} products were found with query: "{title}"</h2>
        </InnerContainer>
    );
}
 
export default DisplayQuery;