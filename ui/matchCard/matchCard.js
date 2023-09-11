document.addEventListener('DOMContentLoaded', () => {
  const expandableCards = document.querySelectorAll('.matchCard--Expandable')

  // Accordion toggle logic
  expandableCards.forEach(card => {
    const currentBody = card.querySelector('.matchCard__body')
    const currentAccordion = card.querySelector('.matchCard--Expandable__accordion')
    const currentArrow = card.querySelector('.matchCard__body-main-textInfo-arrow')

    currentBody.addEventListener('click', () => {
      currentAccordion.classList.toggle('matchCard--Expandable__accordion--Hidden')
      currentArrow.classList.toggle('matchCard__body-main-textInfo-arrow--Rotated')
    })
  })

  // Collapse all matches
  const collapseAllButton = document.querySelector('.card__header-collapseButton')
  collapseAllButton.addEventListener('click', () => {
    const allAccordions = document.querySelectorAll('.matchCard--Expandable__accordion')
    const allArrows = document.querySelectorAll('.matchCard__body-main-textInfo-arrow')

    allAccordions.forEach(accordion => {
      accordion.classList.add('matchCard--Expandable__accordion--Hidden')
    })

    allArrows.forEach(arrow => {
      arrow.classList.add('matchCard__body-main-textInfo-arrow--Rotated')
    })
  })


  // BET BUTTON LOGIC
  const betButtons = document.querySelectorAll('.betButton')

  betButtons.forEach(button => {
    button.addEventListener('click', e => {
      const clickedButton = e.currentTarget
      const clickedButtonStatus = clickedButton.getAttribute('data-match-card-button')
      const thisAccordionRow = clickedButton.closest('.matchCard--Expandable__accordion-row')
      const thisAccordionRowButtons = thisAccordionRow.querySelectorAll('.betButton')

      // uncheck all row buttons
      thisAccordionRowButtons.forEach(thisRowBtn => {
        if (thisRowBtn.getAttribute('data-match-card-button') === 'disabled') {
          return
        } else {
          thisRowBtn.setAttribute('data-match-card-button', 'not-checked')
        }
      })

      // every status logic
      switch (clickedButtonStatus) {
        case 'disabled':
          return
        case 'checked':
          clickedButton.setAttribute('data-match-card-button', 'not-checked')
          break
        case 'not-checked':
          clickedButton.setAttribute('data-match-card-button', 'checked')
      }
    })
  })

})