import InnerContainer from "@/components/Containers/InnerContainer";
import OuterContainer from "@/components/Containers/OuterContainer";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";



const NotFound = () => {
    return (
        <div className="flex w-[100%] bg-white">
        <Navigation />
        <div className="flex-grow max-w-[100vw] overflow-x-hidden">
            <Header />
            <main>
              <OuterContainer>
                <InnerContainer className="flex items-center justify-center">
                    <h2 className="text-5xl text-blue-500 font-bold py-20">Ooops... Not found 404 <i className="fa-regular fa-face-sad-tear"></i></h2>
                </InnerContainer>
              </OuterContainer>
            </main>
        </div>
    </div>
    );
}
 
export default NotFound;