let hambToggle = document.querySelector('.hamb_toggle');
let small_d_menu = document.querySelector('.toggleMenu');
hambToggle.addEventListener('click', function(){
    hambToggle.classList.toggle(' ')
    small_d_menu.classList.toggle('active')
})

const textDtlsElements = document.querySelectorAll('.textDtls');
const imageElement = document.querySelector('.image img');

textDtlsElements.forEach(textDtl => {
  textDtl.addEventListener('click', function() {
    
    textDtlsElements.forEach(element => element.classList.remove('active'));
    
    this.classList.add('active');

    if (this.id === 'step1') {
        imageElement.src = './images/Rectangle 17.png';
      } else if (this.id === 'step2') {
        imageElement.src = './images/inlandBarging.jpg';
      } else if (this.id === 'step3') {
        imageElement.src = './images/t-2.jpg';
      } else if (this.id === 'step4') {
        imageElement.src = './images/t2.jpg';
      }

      if (this.id === 'step11') {
        imageElement.src = './images/brg1 (2).jpeg';
      } else if (this.id === 'step21') {
        imageElement.src = './images/brg1 (1).png';
      } else if (this.id === 'step31') {
        imageElement.src = './images/brg1 (1).jpeg';
      }

      let cost = document.querySelector('.cost');
      let efficient = document.querySelector('.efficient');
      let friendly = document.querySelector('.friendly');

      if(this.id == 'cost'){
        cost.classList.add('modiColor');
        efficient.classList.remove('modiColor')
        friendly.classList.remove('modiColor')
      } else if( this.id == 'efficient'){
        cost.classList.remove('modiColor');
        efficient.classList.add('modiColor')
        friendly.classList.remove('modiColor')
      }else if( this.id == 'friendly'){
        cost.classList.remove('modiColor');
        efficient.classList.remove('modiColor')
        friendly.classList.add('modiColor')
      }

      let p1 = document.querySelector('.p1');
      let p2 = document.querySelector('.p2');
      let p3 = document.querySelector('.p3');

      if(this.id == 'cost' && window.innerWidth < 900){
        p1.classList.add('actOn');
        p2.classList.remove('actOn')
        p3.classList.remove('actOn')
        
      } else if( this.id == 'efficient' && window.innerWidth < 900){
        p1.classList.remove('actOn');
        p2.classList.add('actOn')
        p3.classList.remove('actOn')
      }else if( this.id == 'friendly' && window.innerWidth < 900){
        p1.classList.remove('actOn');
        p2.classList.remove('actOn')
        p3.classList.add('actOn')
      }else if(window.innerWidth > 900){
        p1.classList.remove('actOn');
        p2.classList.remove('actOn')
        p3.classList.remove('actOn')
      }
  });
});
