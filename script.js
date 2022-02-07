
  
var menu = document.querySelector(".menu");

var lineOne = document.querySelector(".menu-line-one");
var lineTwo = document.querySelector(".menu-line-two");
var lineThree = document.querySelector(".menu-line-three")

var links = document.querySelector(".links");

function menuToggle() {
    links.classList.toggle("open");
    lineOne.classList.toggle("line-one-anim");
    lineTwo.classList.toggle("line-two-anim");
    lineThree.classList.toggle("line-three-anim");
}

function closeNav() {
    
    links.classList.toggle("open");
    lineOne.classList.toggle("line-one-anim");
    lineTwo.classList.toggle("line-two-anim");
    lineThree.classList.toggle("line-three-anim");
}

particlesJS("particles-js", {
    particles: {
      number: { value: 75, density: { enable: true, value_area: 115 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 70,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "grab" },
        onclick: { enable: false, mode: "remove" },
        resize: true
      },
      modes: {
        grab: { distance: 95.90409590409591, line_linked: { opacity: 1 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  var coll = document.querySelectorAll(".collapsible");
  var i;
  
  // for (i = 0; i < coll.length; i ++) {
  //   coll[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     var content = this.nextElementSibling;
  //     if (content.style.maxHeight){
  //       content.style.maxHeight = null;

  //     } else {
  //       content.style.maxHeight = content.scrollHeight + "px";
  //     } 
  //   });  }


  var $contents = $(".content")
  var $headers = $(".header").click(function () {
      var $header = $(this);

      this.classList.toggle('active');

      //getting the next element
      var $content = $header.next();
      //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
      $content.stop(true, true).slideToggle(500, function () {
      });
  
      $contents.not($content).stop(true, true).slideUp();
  });


  $(function () {
    $(document).scroll(function () {
      var $nav = $(".nav");
      var $links = $(".links");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $links.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("testimonal");
    // var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    // for (i = 0; i < dots.length; i++) {
      // dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += "activeDot";
    setTimeout(showSlides, 7000); // Change image every 2 seconds
  }