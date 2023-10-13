//BURGER
const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.header__cont')
const body = document.querySelector('body')
let switchHeader = false
let toTop = 0

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_active')
    nav.classList.toggle('header__cont_active')
    if (switchHeader) {
      window.scrollTo(0, toTop)
      switchHeader = false
    } else {
      switchHeader = true
      toTop = window.scrollY
    }
})


//TIMER
let countDownDate = new Date("Nov 1, 2023 00:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".exch__day").innerHTML = days;
  document.querySelector(".exch__hrs").innerHTML = hours;
  document.querySelector(".exch__mins").innerHTML = minutes;
  document.querySelector(".exch__secs").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "Happy New Year!";
  }
}, 1000);


//EXCHANGE
let btns = document.querySelectorAll('.exch__payment')

btns.forEach((element) => {
  element.addEventListener('click', () => {
      btns.forEach((el) => {
          el.classList.remove('exch__payment_active')
      })
      element.classList.add('exch__payment_active')
  })
})

