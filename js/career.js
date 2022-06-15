var accordions = document.querySelectorAll('.accordion');
document.addEventListener('DOMContentLoaded', function () {
  accordions.forEach(function (el) {
    el.addEventListener('click', function (e) {
        var self = e.currentTarget;
        
        if(self.classList.contains('open')) {
            self.classList.remove('open')
        } else {
            for(sel of accordions) {
                sel.classList.remove('open')
            }
            self.classList.add('open')
        }
    });
  });
});