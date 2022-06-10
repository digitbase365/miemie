// Morphing Burger Icon{}
let menu = document.querySelector('.menu')
let burger = document.querySelector('.burger')
let nav = document.querySelector('nav')
let navlink = document.querySelectorAll('nav a')

menu.addEventListener('click', ()=>{
    menu.classList.toggle('swish')
    burger.classList.toggle('swish')
    nav.classList.toggle('swish')
})

navlink.forEach((item) => {
    item.addEventListener('click', ()=>{
        menu.classList.toggle('swish')
        burger.classList.toggle('swish')
        nav.classList.toggle('swish')

    });
})

// End of Morphing Burger Icon{}


// WHATSAPP top BOT SCRIPT****************************************//
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 400) { 
    document.getElementById("top").classList.add("scroll-visible");
  } else { 
    document.getElementById("top").classList.remove("scroll-visible");

  }
}

// END OF WHATSAPP top BOT SCRIPT****************************************//