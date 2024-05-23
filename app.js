let hambToggle = document.querySelector('.hamb_toggle');
let small_d_menu = document.querySelector('.toggleMenu');
hambToggle.addEventListener('click', function(){
    hambToggle.classList.toggle('actn')
    small_d_menu.classList.toggle('active')
})