document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.header__burgerIcon')
  const burgerMenu = document.querySelector('.header__burgerMenu')

  /* Open logic */
  burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.remove('header__burgerMenu--Hidden')
    document.body.setAttribute('style', 'position: fixed; width: 100vw;')
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
      document.body.removeAttribute('style')
    }
  })


  /* Close logic */
  const closeArrows = document.querySelectorAll('.header__burgerMenu-bottom-arrowUp')
  closeArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      burgerMenu.classList.add('header__burgerMenu--Hidden')
      document.body.removeAttribute('style')
    })
  })

  // Resolve Safari 100vh problem
  const setAppHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', setAppHeight)
  setAppHeight()
})