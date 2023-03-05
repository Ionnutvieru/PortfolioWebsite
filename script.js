function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

// Light and Dark Mode

var checkbox = document.getElementById("switch");
var BodyCards = document.getElementsByClassName("card");
var socialButtons = document.getElementsByClassName("fa-icon");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    darkmode(); 
  } else {
    removedarkmode(); 
  }
})

function darkmode() {
  document.body.classList.add("dark-mode");
  for(i = 0; i < BodyCards.length; ++i) {
    BodyCards[i].classList.add("darkmodeCards");
  }
  for(i = 0; i < socialButtons.length; ++i) {
    socialButtons[i].style.color = "white";
  };
  checkbox.checked = true;
}


function removedarkmode() {
  document.body.classList.remove("dark-mode");
  for(i = 0; i < BodyCards.length; ++i) {
    BodyCards[i].className ='card';
  }
  for(i = 0; i < socialButtons.length; ++i) {
    socialButtons[i].style.color = "black";
  };
  checkbox.checked = false;
}
