import AOS from "aos";
import "aos/dist/aos.css";

const container = document.querySelector('.hero.container');
const program = document.querySelector('.program');
const topPreviewItem = document.getElementById("topPreview_item")
const bottomPreviewItem = document.getElementById("bottomPreview_item")

function getLeftSide() {
    let leftContainerSide = container.getBoundingClientRect().left;
    
    if (!window.matchMedia('screen and (max-width: 480px)').matches) {
    program.style.marginLeft = `${leftContainerSide}px`
    topPreviewItem.style.marginLeft = `${leftContainerSide}px`
    }
}
// function getRightSide() {
//     let rightContainerSide = container.getBoundingClientRect().right;
//     bottomPreviewItem.style.marginRight = `${rightContainerSide}px`
// }

getLeftSide();

window.addEventListener('resize', getLeftSide)

//scroll to top
const scrollButton = document.getElementById('navButton')

window.onscroll = function() {scrollFunction()}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollButton.style.display = 'flex';
    }else{
        scrollButton.style.display = 'none';
    }
}

scrollButton.addEventListener('click', () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth'})
})

//hamburgers
const hamburger = document.querySelector(".header__hamburger")
const headerMenu = document.querySelector('.header__menu')

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active')
    headerMenu.classList.toggle('active')
    document.body.classList.toggle("no-scroll");
})

const menuItem = document.querySelectorAll('.menu__link');


menuItem.forEach(item => {
    item.addEventListener('click', () =>{
        hamburger.classList.toggle('active')
        headerMenu.classList.toggle('active')
        headerMenu.style.transition = "right 0.1s ease-in-out"
        document.body.classList.toggle("no-scroll");
    })
})

///AOS
AOS.init({
    duration: 700,
    offset: 50,
    once: true,
    // duration: 0,
    // offset: 0,
})



//lazy loading
document.addEventListener('DOMContentLoaded', () =>{
    const image = document.querySelectorAll('img')

    image.forEach(img => {
        if(!img.id.includes("hero-image")){
            img.setAttribute("loading", "lazy")
        }
    });
})

//smooth anchor point
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});