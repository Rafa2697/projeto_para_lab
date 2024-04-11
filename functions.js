

$(function () {
  $('.box2').css('display', 'none').css('margin', '20px')
  $('.img1').css('width', '60%')
  $('.img2').css('width', '60%')
  $('.img3').css('width', '75%')

  $('.box1').click(function () {
    $('.box2').slideToggle().css('display', 'flex').css('justify-content', 'space-around')
  })
})

function animaDiv(element) {
  element.style.height = '0px';
  element.style.display = 'block';
  element.animate({
    height: element.scrollHeight + 'px'
  }, {
    duration: 500,
    easing: 'ease-in-out',
    fill: 'forwards'
  });
}

function toggleDiv() {
  let trigger = document.getElementById('span');
  let targetDiv = document.getElementById('demo');

  targetDiv.style.height = '0'
  targetDiv.style.overflow = 'hidden'
  targetDiv.style.transition = "all .7s ease"
  trigger.addEventListener('click', function () {
    if (targetDiv.style.height === '0px') {
        targetDiv.style.height = targetDiv.scrollHeight + 10 + "px";
      console.log('teste1')
    } else {
      targetDiv.style.height = 0;
      console.log('teste2')
    }

  });

  trigger.addEventListener('mouseenter', mouseEnter);
  trigger.addEventListener('mouseout', mouseOut);

}


//função para mudar a cor para vermelho do span
function mouseEnter() {
  document.getElementById('span').style.color = 'red';
}

//função para mudar voltar a cor para darkslategray
function mouseOut() {
  document.getElementById('span').style.color = 'darkslategray';
}


document.addEventListener('DOMContentLoaded', function () {

  toggleDiv()
  typeWriter(titulo)
})

function typeWriter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = ''
  textArray.forEach((letra, i) => {
    setTimeout(function () {
      element.innerHTML += letra;
    }, 120 * i)
  });
}

const titulo = document.querySelector('.titulo-animado')


