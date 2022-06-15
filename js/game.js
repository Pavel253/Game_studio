const cardsGame = document.querySelectorAll('.block__game .card');

for(item of cardsGame) {
    item.addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

const cardsGamePhone = document.querySelectorAll('.block__game-phone .card');

for(item of cardsGamePhone) {
    item.addEventListener('click', function() {
        this.classList.toggle('active')
    })
}