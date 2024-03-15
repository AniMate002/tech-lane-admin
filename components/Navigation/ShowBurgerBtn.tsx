import { gsap } from 'gsap'



const ShowBurgerBtn = () => {
    function showMenuClickHandler(){
        gsap.to('.gsap_navigation_menu', {
            right: 'auto',
            left: 0,
            opacity: 1
        })
    }
    return (
        <button onClick={showMenuClickHandler} className="text-white text-2xl mt-1
        block
        lg:hidden
        ">
            <i className="fa-solid fa-bars"></i>
        </button>
    );
}
 
export default ShowBurgerBtn;