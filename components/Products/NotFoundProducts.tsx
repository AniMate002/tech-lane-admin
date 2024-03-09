import ContainerHeader from "../Containers/ContainerHeader";
import InnerContainer from "../Containers/InnerContainer";



const NotFoundProducts = ({ title }: {title: string | null}) => {
    return (
        <InnerContainer className="mt-6">
            <ContainerHeader title="Oopps..."/>
            <h2 className="text-center text-7xl pt-4 font-bold text-blue-500">Ooops... 404 <i className="fa-regular fa-face-frown"></i></h2>
            <p className="text-center mt-4 text-2xl text-slate-500">Products: "{title}" Were not found</p>
        </InnerContainer>
    );
}
 
export default NotFoundProducts;