window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > navbar.offsetTop) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
};
