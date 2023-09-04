document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.disciplines__list-item')
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('disciplines__list-item--Active')
    })
  })

  // Add left gradient only if element was scrolled
  const gradientWrapper = document.querySelector('.disciplines__gradientWrapper')
  const listWrapper = document.querySelector('.disciplines__listWrapper')
  listWrapper.addEventListener('scroll', () => {
    const wasScrolled = listWrapper.scrollLeft > 0
    if (wasScrolled) {
      gradientWrapper.classList.remove('disciplines__gradientWrapper--NotScrolled')
    } else {
      gradientWrapper.classList.add('disciplines__gradientWrapper--NotScrolled')
    }
  })
})