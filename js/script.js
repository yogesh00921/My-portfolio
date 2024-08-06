
//=========== Loader 
var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
  setTimeout(function(){
    loader.style.display = "none";
  }, 1000);
});

//======== OnScroll 
document.addEventListener('scroll',() => {
  const header = document.querySelector('header');
  if(window.scrollY > 0){
    header.classList.add('scrolled');
  }else{
    header.classList.remove('scrolled');
  }
});


//======== Active on Scroll 

const navLink = document.querySelectorAll(".navLink");
const section = document.querySelectorAll("section");

let currentSection = 'home';
window.addEventListener('scroll',()=>{
  section.forEach(section => {
    if (window.scrollY >= (section.offsetTop - section.clientHeight / 4)){
      currentSection = section.id;
    }
  });

  navLink.forEach(navLink => {
    if(navLink.href.includes(currentSection)){
      document.querySelector('.active').classList.remove('active');
      navLink.classList.add('active');
    }
  });
});


//========= Mobile menu 
hamburger = document.querySelector(".hamburger")
hamburger.onclick = function(){
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
}

//========= Star Animation 

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1.6,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2.4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 5
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

//========= Typed Animation 

var typed = new Typed('#element', {
    strings: ['Front-End Developer','Freelancer','Video Editor'],
    typeSpeed: 200,
    loop:true,
  });



//========== Scroll Animation 

const sr = ScrollReveal ({
    distance: '100px',
    duration: 2500,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'bottom'})
sr.reveal('.hero-img',{delay:200, origin:'bottom'})

sr.reveal('.about-img',{delay:200, origin:'bottom'})
sr.reveal('.about-content',{delay:200, origin:'bottom'})

sr.reveal('.skill-anima',{delay:200, origin:'bottom'})
sr.reveal('.owl-carousel',{delay:200, origin:'bottom'})

sr.reveal('.contact-form',{delay:200, origin:'bottom'})
sr.reveal('.contact-img',{delay:200, origin:'bottom'})

sr.reveal('.example-2',{delay:200, origin:'bottom'})



//========== OWl Slider

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      200:{
        items:2
      },
      600:{
          items:3
      },
      900:{
        items:4
      },
      1200:{
          items:5
      }
  }
})