

$(function(){
    $('.box2').css('display','flex')
    $('.img1').css('width','60%')
    $('.img2').css('width','60%')
    $('.img3').css('width','75%')
    
  $('.box1').click(function(){
    $('.box2').slideToggle().css('display','flex').css('justify-content' ,'space-around')
  })
})