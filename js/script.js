// menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};

// scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header navbar a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header navbar a[href*= ' + id + ']').classList.add('active');
            });


        };
    });

/*=======sticky nav bar=========*/  

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);



menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')

};

// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// dark light mode

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left'});
ScrollReveal().reveal('.home-content h3,.home-content p, .about-content', { origin: 'right'});


const scriptURL = 'https://script.google.com/macros/s/AKfycbyjw32cUr2-O93qY9Cyk5UfuwRwfAArBX3SOyqRGuDluV0PLUpQXPldIDpmUY5UCJHCzA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    // console.log("Entered form");-
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successful!";
            // console.log("Msg changed");
            setTimeout(function (){
                msg.innerHTML = ""
            }, 3000);
    form.reset
})
    .catch(error => console.error('Error!', error.message))
})









