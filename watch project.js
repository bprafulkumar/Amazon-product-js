var Timer1 = document.getElementById('time1')
var totaltimer = document.querySelectorAll('.time')

var color_btn = document.querySelectorAll('.box-colors')
var color_btn_1 = document.getElementById('color-1')
var color_btn_2 = document.getElementById('color-2')
var color_btn_3 = document.getElementById('color-3')
var color_btn_4 = document.getElementById('color-4')

// console.log(color_btn_4)



var imag1 = document.getElementById('img1');
var imag2 = document.getElementById('img2');
var imag3 = document.getElementById('img3');
var imag4 = document.getElementById('img4');
var imag5 = document.getElementById('img5');



var text1 = document.getElementById('time1')
var text2 = document.getElementById('time2')
var text3 = document.getElementById('time3')
var text4 = document.getElementById('time4')
var text5 = document.getElementById('time5')





// console.log(totaltimer)


var timer = setInterval(()=>{
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let secs = new Date().getSeconds()
  let parttime = Timer1.innerHTML;
  parttime = hours+":"+ minutes+":"+secs;
//   console.log(parttime)
  document.getElementById('time1').innerHTML = parttime
  document.getElementById('time2').innerHTML = parttime
  document.getElementById('time3').innerHTML = parttime
  document.getElementById('time4').innerHTML = parttime
  document.getElementById('time5').innerHTML = parttime
},1000)

color_btn_1.addEventListener('click', function(){
    imag1.style.display = 'none'
    imag2.style.display = 'block'
    imag3.style.display = 'none'
    imag4.style.display = 'none'
    imag5.style.display = 'none'

    text1.style.display =  'block'



      // console.log(text)
})

color_btn_2.addEventListener('click', function(){
  imag2.style.display = 'none'
  imag3.style.display = 'block'
  imag1.style.display = 'none'
  imag4.style.display = 'none'
  imag5.style.display = 'none'

  text3.style.display ='block'
})

color_btn_3.addEventListener('click', function(){
  imag3.style.display = 'none'
  imag4.style.display = 'block'
  imag2.style.display = 'none'
  imag1.style.display = 'none'
  imag5.style.display = 'none'
  
  text4.style.display = 'block'
})

color_btn_4.addEventListener('click', function(){
  imag4.style.display = 'none'
  imag5.style.display = 'block'
  imag3.style.display = 'none'
  imag2.style.display = 'none'
  imag1.style.display = 'none'

  text5.display.display = 'block'
})

var framepart = document.getElementById('heart-beat-part')
var heart_btn = document.getElementById('heartbtn')

// console.log(heart_btn)

heart_btn.addEventListener('click', function(){
      text1.style.display = 'none'
     
      framepart.style.display ='block'
      text2.style.display = 'none'
      text3.style.display = 'none'
      text4.style.display = 'none'
      text5.style.display = 'none'
})

var timings = document.getElementById('timing');

timings.addEventListener('click', function(){
  text1.style.display = 'block'
  framepart.style.display = 'none'
})






