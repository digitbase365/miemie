// Morphing Burger Icon{}
let menu = document.getElementById('menu')
let burger = document.getElementById('burger')
let nav = document.getElementById('nav')
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

// Click outside to close
document.onclick = function(e){
  e.stopPropagation()

  if(e.target.id !== 'nav' && e.target.id !== 'menu'){
    menu.classList.remove('swish')
    nav.classList.remove('swish')
  }
}

// End of Morphing Burger Icon{}


// Play Icon Script 
let vides = document.getElementById('vides')
let vplay = document.getElementById('vplay')

vides.addEventListener('click', (e)=>{
  e.stopPropagation()
  vides.classList.toggle('teleport')
  vplay.classList.toggle('teleport')
})
// End of Play Icon Script


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