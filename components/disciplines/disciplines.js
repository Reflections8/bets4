document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.disciplines__list-item')
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('disciplines__list-item--Active')
    })
  })
})