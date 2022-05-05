const form = document.querySelector('form');


window.addEventListener('load', countdown_init)


form.addEventListener('submit', (e)=>{
  e.preventDefault()

  let mail = document.querySelector('input[name="email"]');


  let form = {mail:mail.value, request:'submition'}

  var xml = new XMLHttpRequest()
  xml.onload = function(){
      if(xml.status == 200 || xml.readyState == 4){
          alert(xml.responseText)
      }
  }
  xml.open('POST', './api.php', true);
  xml.send(JSON.stringify(form));
})

// tggle comment line  25 -> function countdown_init();

if( ! mail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ){
    console.error('email not valid \n insert a valid one.');
  }else{
    console.log('email is valid');
  }

function countdown_init(){

  const countToDate = new Date('03 jun 2022 13:30:00').getTime()
  let previousTimeBetweenDates
  setInterval(() => {
    const currentDate = new Date().getTime()
    const offset = Math.ceil((countToDate - currentDate))
    flipAllCards(offset)

    previousTimeBetweenDates = offset
  }, 250)

  function flipAllCards(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    flip(document.querySelector("[data-days-tens]"), Math.floor(days/10))
    flip(document.querySelector("[data-days-ones]"), (days % 10))
    flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
    flip(document.querySelector("[data-hours-ones]"), hours % 10)
    flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
    flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
  }

  function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top")
    const startNumber = parseInt(topHalf.textContent)
    if (newNumber === startNumber) return

    const bottomHalf = flipCard.querySelector(".bottom")
    const topFlip = document.createElement("div")
    topFlip.classList.add("top-flip")
    const bottomFlip = document.createElement("div")
    bottomFlip.classList.add("bottom-flip")

    top.textContent = startNumber
    bottomHalf.textContent = startNumber
    topFlip.textContent = startNumber
    bottomFlip.textContent = newNumber

    topFlip.addEventListener("animationstart", e => {
      topHalf.textContent = newNumber
    })
    topFlip.addEventListener("animationend", e => {
      topFlip.remove()
    })
    bottomFlip.addEventListener("animationend", e => {
      bottomHalf.textContent = newNumber
      bottomFlip.remove()
    })
    flipCard.append(topFlip, bottomFlip)
  }



}
