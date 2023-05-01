let deg = 0
setInterval(() =>{
  deg = deg -90;
  document.querySelector('.cube').style.transform = 
  'rotateX(' + deg + 'deg)'
}, 1000)