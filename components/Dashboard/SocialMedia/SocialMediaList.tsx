import ContainerHeader from "@/components/Containers/ContainerHeader";
import InnerContainer from "@/components/Containers/InnerContainer";
import { allSocialMedia } from "@/components/Data";
import MeidaCard from "./MeidaCard";


const SocialMediaList = () => {
    const renderedSocialMedia = allSocialMedia.map(media => <MeidaCard key={media.id} {...media}/>)
    return (
        <InnerContainer className="flex-grow">
            <ContainerHeader title="Social Media"/>
            <div className="flex flex-col gap-4">
                { renderedSocialMedia }
            </div>
        </InnerContainer>
    );
}
 
export default SocialMediaList;