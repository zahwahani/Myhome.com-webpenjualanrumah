// smooth scrolling
$('#navbar a, .btn').on('click', function (Event){
    if (this.hash !==''){
        Event.preventDefault();

        const hash= this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top - 100},
            800
        );
    }
});

// background transparant
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.7;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});