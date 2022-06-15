const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const pages = document.querySelectorAll('.container__new');
const dots = document.querySelectorAll('.number');

let index = 0;

const activePages = n => {
    for(page of pages) {
        page.classList.remove('active')
    }
    pages[n].classList.add('active')
}
const activeDots = n => {
    for(dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const ActiveDotPage = ind => {
    activePages(ind)
    activeDots(ind)
}


const activeNext = () => {
    if( index == pages.length - 1) {
        index = 0
        ActiveDotPage(index)
    } else {
        index++;
        ActiveDotPage(index)
    }
}

const activePrev = () => {
    if(index == 0) {
        index = pages.length - 1;
        ActiveDotPage(index)
    } else {
        index--;
        ActiveDotPage(index)
    }
}

next.addEventListener('click', activeNext)
prev.addEventListener('click', activePrev)

dots.forEach((item, forIndex) => {
    item.addEventListener('click', function() {
        index = forIndex;
        ActiveDotPage(index)
    })
})