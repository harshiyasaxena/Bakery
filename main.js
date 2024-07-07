/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        console.log('Toggle clicked');
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        console.log('Close clicked');
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll',shadowHeader)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = documeny.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offset - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown> sectionTop && scrollDown<= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'40px',
    opacity:1,
    scale:1.1,
    duration:2500,
    delay:300,
    // reset:true,
})

sr.reveal(`.home__data`)

sr.reveal(`.home__image`,{rotate: {z: -15}})
sr.reveal(`.home__bread`,{rotate: {z: 15}})
sr.reveal(`.home__footer`,{scale:1 ,origin:'bottom'})