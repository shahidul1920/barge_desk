let hambToggle = document.querySelector('.hamb_toggle');
let small_d_menu = document.querySelector('.toggleMenu');
hambToggle.addEventListener('click', function(){
    hambToggle.classList.toggle('actn')
    small_d_menu.classList.toggle('active')
})

const textDtlsElements = document.querySelectorAll('.textDtls');

textDtlsElements.forEach(textDtl => {
  textDtl.addEventListener('click', function() {
    
    textDtlsElements.forEach(element => element.classList.remove('active'));
    
    this.classList.add('active');
  });
});
