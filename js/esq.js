// Morphing Burger Icon{}
let menu = document.querySelector('.menu')
let burger = document.querySelector('.burger')
let nav = document.querySelector('nav')

menu.addEventListener('click', ()=>{
    menu.classList.toggle('swish')
    burger.classList.toggle('swish')
    nav.classList.toggle('swish')
})


// End of Morphing Burger Icon{}