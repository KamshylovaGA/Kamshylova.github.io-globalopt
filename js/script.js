const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.first_menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
//Slider
let slideIndex = 1;
    const slides = document.querySelectorAll('.slide'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');        
        

    showSlides(slideIndex);    

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.classList.add('pasiv'));

        slides[slideIndex - 1].classList.remove('pasiv');   

        slides[slideIndex - 1].classList.add('active');              
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
        
    });

    next.addEventListener('click', function(){
        plusSlides(1);
        
    });
    //MODAL
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.overlay');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 300000);

    