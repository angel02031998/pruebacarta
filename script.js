// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

//

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')
const noBtn = document.querySelector('#noBtn');
const yesBtn = document.querySelector('#yesBtn');

 
noBtn.addEventListener('mouseover', function () {
  const randomX = parseInt(Math.random()*1000);
  const randomY = parseInt(Math.random()*500);
  noBtn.style.setProperty('top',randomY+'%');
  noBtn.style.setProperty('left',randomX+'%');
  noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

btnCloseElement.disabled = true
yesBtn.disabled = true
yesBtn.style.visibility = "hidden"
noBtn.style.visibility = "hidden"

btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  yesBtn.disabled = false
  yesBtn.style.visibility = "visible"
  noBtn.style.visibility = "visible"
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')
  

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'

    yesBtn.addEventListener('click',function () {
      alert('UWU, vamos a seguir creando recuerdos juntos mi osita❤️')
  });
  
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true
  

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')

  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
  const yesBtn = document.querySelector('#yesBtn');
  yesBtn.style.visibility = "hidden"
  noBtn.style.visibility = "hidden"

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si uwu')
});



noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
})
