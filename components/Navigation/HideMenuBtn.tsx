"use client"
import { gsap } from 'gsap'


const HideMenuBtn = () => {
    function hideMenuClickHandler(){
        gsap.to('.gsap_navigation_menu', {
            left: 'auto',
            right: '100%',
            opacity: 0
        })
    }
    return (
        <button onClick={hideMenuClickHandler} className="absolute right-4 top-2 text-2xl text-blue-500
        block
        lg:hidden
        ">
            <i className="fa-solid fa-xmark"></i>
        </button>
    );
}
 
export default HideMenuBtn;