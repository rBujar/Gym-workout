import AOS from "aos";
import "aos/dist/aos.css";

const container = document.querySelector('.hero.container');
const program = document.querySelector('.program');
const topPreviewItem = document.getElementById("topPreview_item")
const bottomPreviewItem = document.getElementById("bottomPreview_item")

function getLeftSide() {
    let leftContainerSide = container.getBoundingClientRect().left;
    program.style.marginLeft = `${leftContainerSide}px`
    topPreviewItem.style.marginLeft = `${leftContainerSide}px`
}
// function getRightSide() {
//     let rightContainerSide = container.getBoundingClientRect().right;
//     bottomPreviewItem.style.marginRight = `${rightContainerSide}px`
// }

getLeftSide();

window.addEventListener('resize', getLeftSide)

//scroll to top
const scrollButton = document.getElementById('navButton')

scrollButton.addEventListener('click', () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth'})
})

//hamburgers
const hamburger = document.querySelector(".header__hamburger")
const headerMenu = document.querySelector('.header__menu')

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active')
    headerMenu.classList.toggle('active')
})

///AOS
AOS.init({
    duration: 1000,
    offset: 100,
})