
// Reveal from right side
function revealFromRight() {
  var reveals = document.querySelectorAll(".revealFromRight");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
    else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealFromRight);

// Reveal from left side
function revealFromLeft() {
  var reveals = document.querySelectorAll(".revealFromLeft");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
    else {
      reveals[i].classList.remove("active");
    }
  }
}
  
window.addEventListener("scroll", revealFromLeft);