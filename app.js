let hambToggle = document.querySelector('.hamb_toggle');
let small_d_menu = document.querySelector('.small_d_menu');
hambToggle.addEventListener('click', function(){
    hambToggle.classList.toggle('actn')
    small_d_menu.classList.toggle('actvNav')
})