

$(function(){
    $('.box2').css('display','none').css('margin','20px')
    $('.img1').css('width','60%')
    $('.img2').css('width','60%')
    $('.img3').css('width','75%')
    
  $('.box1').click(function(){
    $('.box2').slideToggle().css('display','flex').css('justify-content' ,'space-around')
  })
})


function mais(){
  let x = document.getElementById('span');
  let y = document.getElementById('demo');

  x.addEventListener('click', function(){
     if(y.style.display === 'block'){
       y.style.display = 'none'
     }else{
       y.style.display = 'block'
     }
   
  });

  x.addEventListener('mouseenter', mouseEnter);
  x.addEventListener('mouseout', mouseOut);

}

//função para mudar a cor para vermelho do span
function mouseEnter(){
  document.getElementById('span').style.color = 'red';
}

//função para mudar voltar a cor para darkslategray
function mouseOut(){
  document.getElementById('span').style.color = 'darkslategray';
}
mais()