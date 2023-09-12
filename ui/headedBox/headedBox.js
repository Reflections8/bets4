document.addEventListener('DOMContentLoaded', () => {
  const headedBoxes = document.querySelectorAll('.headedBox')
  headedBoxes.forEach(box => {
    const showMoreBtn = box.querySelector('.headedBox__body-showButton')

    // Show logic
    showMoreBtn.addEventListener('click', e => {
      const thisBody = e.currentTarget.closest('.headedBox__body')
      thisBody.classList.toggle('headedBox__body--Opened')
      box.classList.toggle('headedBox--Opened')

      if (thisBody.classList.contains('headedBox__body--Opened')) {
        showMoreBtn.innerText = 'Show less'
      } else {
        showMoreBtn.innerText = 'Show more'
      }
    })
  })
})