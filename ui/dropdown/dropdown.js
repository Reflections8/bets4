document.addEventListener('DOMContentLoaded', () => {

  const dropdown = document.querySelector('.dropdown')
  dropdown.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.toggle('expanded');

    const currentLabel = e.target.closest('label')
    const currentInput = e.currentTarget.querySelector(`#${currentLabel.getAttribute('for')}`)
    currentInput.checked = true
  })

  document.addEventListener('click', () => {
    dropdown.classList.remove('expanded')
  })

})