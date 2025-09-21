const container = document.querySelector('.hero.container');
const program = document.querySelector('.program');

function getLeftSide() {
    let leftContainerSide = container.getBoundingClientRect().left;
    program.style.marginLeft = `${leftContainerSide}px`
}

getLeftSide();

window.addEventListener('resize', getLeftSide)


const scrollButton = document.getElementById('navButton')

scrollButton.addEventListener('click', () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth'})
})