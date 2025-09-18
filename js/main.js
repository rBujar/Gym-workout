const container = document.querySelector('.hero.container');
const program = document.querySelector('.program');

function getLeftSide() {
    let leftContainerSide = container.getBoundingClientRect().left;
    program.style.marginLeft = `${leftContainerSide}px`
}

getLeftSide();

window.addEventListener('resize', getLeftSide)


