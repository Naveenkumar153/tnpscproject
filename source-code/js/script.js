


const navLink   = document.querySelector('#nav-links');
const humberger = document.querySelector('.humberger');
const navLinks  = document.querySelectorAll('#nav-links li ');

humberger.addEventListener('click', humbergerView);
function humbergerView(){
      navLink.classList.toggle('visible');

      navLinks.forEach( (link,index) => {
            if(link.style.animation){
                  link.style.animation = '';
            }else{
                  link.style.animation = `navLinksFade .5s ease forward ${index / 7 + 1.5}s`;

            }
      });

      // humburget-animation
      humberger.classList.toggle('humberger-animation');
}


// slide
let slideIndex = 0;
let slider = document.querySelector(".slider");
let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots span")

showslide();

function plusslide(position) {
    slideIndex += position;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add("dot-active");
}

function currentslide(index) {
    if (index > slide.length) {
        index = 1;
    }
    else if (index < 1) {
        index = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${index - 1}00%`;
    dots[index - 1].classList.add("dot-active");

    slideIndex = index;
}

function showslide() {
    slideIndex++;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add("dot-active");
}


let interval = setInterval(()=> {
    showslide();
} , 4000);   // Change every image after 3 seconds

slider.addEventListener("mouseover" , ()=> {
    clearInterval(interval);     // onHover Stop Changing every image after 3 seconds 
});

slider.addEventListener("mouseout" , ()=> {
    interval = setInterval(()=> {
        showslide();   
    } , 4000);    // on mouseout from slide then again start Changing every image after 3  seconds 
});


// Resources

const counters = document.querySelectorAll('.counter');
const speed    = 2000;


 counters.forEach( counter => {
     const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count  = +counter.innerText;
        
        const increment = target / speed;

        if(count < target){
            counter.innerText =Math.ceil(count + increment);
            setTimeout(updateCount,1);
        }else{
            count.innerText = target;
        }
     };
     updateCount();
 });


// fixed position

  window.addEventListener('scroll',function(){
      const circle = this.document.querySelector('.fixed-circle')
      circle.classList.toggle('sticky',window.scrollY > 100);
  });