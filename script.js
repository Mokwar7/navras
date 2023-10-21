//BURGER
const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.header__cont')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_active')
    nav.classList.toggle('header__cont_active')
})


//EXCHANGE
const btns = document.querySelectorAll('.exch__payment')

btns.forEach((element) => {
  element.addEventListener('click', () => {
      btns.forEach((el) => {
          el.classList.remove('exch__payment_active')
      })
      element.classList.add('exch__payment_active')
  })
})


//THEME
const toggle = document.querySelector('.header__toggle')
const toggleDark = document.querySelector('.header__toggle-dark')
const toggleLight = document.querySelector('.header__toggle-light')
const clickedToggle = false
const header = document.querySelector('.header')
const logo = document.querySelector('.header__logo')
const main = document.querySelector('.main__container')
const team = document.querySelector('.team__container')
const roadMap = document.querySelector('.roadmap')
const what = document.querySelector('.what')
const token = document.querySelector('.token__container')
const whitepaperImg = document.querySelector('.whitepaperImg')
let toggleTheme = true

toggle.addEventListener('click', () => {
  toggle.classList.toggle('header__toggle_active')
  toggleDark.classList.toggle('header__toggle-dark_active')
  toggleLight.classList.toggle('header__toggle-light_active')
  body.classList.toggle('body_black')
  header.classList.toggle('header__container_black')
  main.classList.toggle('main__container_black')
  team.classList.toggle('team__container_black')
  roadMap.classList.toggle('roadmap_black')
  what.classList.toggle('what_black')
  token.classList.toggle('token__container_black')
  toggleTheme == true ? whitepaperImg.src = './src/whitepipe.svg' : whitepaperImg.src = './src/whitepape icon.svg'
  toggleTheme = !toggleTheme
})


//SCROLL
const mainLink = document.querySelector('.mainLink');
const aboutLink = document.querySelector('.aboutLink')
const tokenomicsLink = document.querySelector('.tokenomicsLink')
const roadmapLink = document.querySelector('.roadmapLink')
const teamLink = document.querySelector('.teamLink')
const tokenomicsLink2 = document.querySelector('.tokenomicsLink2')
const roadmapLink2 = document.querySelector('.roadmapLink2')
const teamLink2 = document.querySelector('.teamLink2')

mainLink.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smmoth",
  }); 
  main.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  burger.classList.remove('header__burger_active')
  nav.classList.remove('header__cont_active')
})

tokenomicsLink2.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  token.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  burger.classList.remove('header__burger_active')
  nav.classList.remove('header__cont_active')
})

roadmapLink2.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  roadMap.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  burger.classList.remove('header__burger_active')
  nav.classList.remove('header__cont_active')
})

teamLink2.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  team.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  burger.classList.remove('header__burger_active')
  nav.classList.remove('header__cont_active')
})

aboutLink.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  what.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  burger.classList.remove('header__burger_active')
  nav.classList.remove('header__cont_active')
})

tokenomicsLink.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  token.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  burger.classList.remove('header__burger_active')
  nav.classList.remove('header__cont_active')
})

roadmapLink.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  roadMap.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  burger.classList.remove('header__burger_active')
  nav.classList.remove('header__cont_active')
})

teamLink.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  team.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  burger.classList.remove('header__burger_active')
  nav.classList.remove('header__cont_active')
})