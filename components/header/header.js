document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.header__burgerIcon')
  const burgerMenu = document.querySelector('.header__burgerMenu')

  /* Open logic */
  burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.remove('header__burgerMenu--Hidden')
  })


  /* Close logic */
  const closeArrows = document.querySelectorAll('.header__burgerMenu-bottom-arrowUp')
  closeArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      burgerMenu.classList.add('header__burgerMenu--Hidden')
    })
  })
})