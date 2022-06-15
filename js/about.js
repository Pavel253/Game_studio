const tabBtn = document.querySelectorAll('.bottom__circle');
const tabItems = document.querySelectorAll('.block__title');


tabBtn.forEach((item) => {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId)

        if( ! currentBtn.classList.contains('_active')) {
            tabBtn.forEach((item) => {
                item.classList.remove('_active')
            })
    
            tabItems.forEach((item) => {
                item.classList.remove('_active')
            })
    
            currentBtn.classList.add('_active')
            currentTab.classList.add('_active')
        }
    })   
})