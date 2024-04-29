const ul = document.querySelector('ul')
const navbar = document.querySelector('.nav') 


document.querySelector('.toogle input').addEventListener('click', function(){
  ul.classList.toggle('slide')
})

document.querySelector('ul li:last-child input').addEventListener('click', function(){
  navbar.classList.toggle('dark')
  document.querySelector('h2.title').classList.toggle('dark')
})