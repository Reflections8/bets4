document.addEventListener('DOMContentLoaded', () => {

  const allAbbr = document.querySelectorAll('abbr')
  allAbbr.forEach(abbr => {
    abbr.setAttribute('title', abbr.innerText)
  })
})