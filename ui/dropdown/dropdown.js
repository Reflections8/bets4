document.addEventListener('DOMContentLoaded', () => {

  const dropdown = document.querySelectorAll('.dropdown')
  dropdown.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.currentTarget.classList.toggle('expanded');

      const currentLabel = e.target.closest('label')
      const currentInput = e.currentTarget.querySelector(`#${currentLabel.getAttribute('for')}`)
      currentInput.checked = true
    })
  })


  document.addEventListener('click', () => {
    dropdown.forEach(item => {
      item.classList.remove('expanded')
    })
  })

})