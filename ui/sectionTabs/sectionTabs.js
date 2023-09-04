document.addEventListener('DOMContentLoaded', () => {

  // Tabs at <= 991
  const sectionTabs = document.querySelector('.sectionTabs')
  const sectionTabsPills = sectionTabs.querySelector('.sectionTabs__pills')
  const labels = sectionTabs.querySelectorAll('.pills__label')

  // All sections that will be set inside tabs at <= 991
  const sections = document.querySelectorAll('[data-section-content]')

  const activeContent = document.querySelector('.sectionTabs__ActiveContent')

  const clickedLabel = {
    forValue: labels[0].getAttribute('for')
  }

  /* Set content logic */
  labels.forEach(label => {
    label.addEventListener('click', e => {
      const currentTab = e.currentTarget.getAttribute('for')

      // prevent scrollLeft auto setting to 0
      e.preventDefault()
      const currentInput = sectionTabs.querySelector(`#${currentTab}`)
      currentInput.checked = true

      const currentSection = Array.from(sections).find(item => {
        return item.getAttribute('data-section-content') === currentTab
      })

      clickedLabel.forValue = currentTab

      activeContent.innerHTML = ''
      activeContent.appendChild(currentSection)
    })
  })


  /* TODO: dynamic return logic if suddenly moved from mobile to PC within the session */
  const rootContentAside = document.querySelector('.rootContent__aside')

  const upcomingMatches = document.querySelector('[data-section-content="UpcomingMatches"]')
  const endedMatches = document.querySelector('[data-section-content="Ended"]')
  const top10Users = document.querySelector('[data-section-content="Top10Users"]')

  const checkScrollAppearance = () => {
    // SCROLL APPEARS
    if (sectionTabsPills.scrollWidth > sectionTabsPills.clientWidth) {
      sectionTabs.classList.add('sectionTabs--WithScroll')
      // SCROLL DISAPPEARS
    } else {
      sectionTabs.classList.remove('sectionTabs--WithScroll')
    }
  }

  setTimeout(() => {
    checkScrollAppearance()
  }, 0)

  window.addEventListener('resize', () => {
    checkScrollAppearance()
    if (window.innerWidth > 991) {
      activeContent.innerHTML = ''
      activeContent.appendChild(upcomingMatches)

      rootContentAside.innerHTML = ''
      rootContentAside.appendChild(endedMatches)
      rootContentAside.appendChild(top10Users)
    } else {
      const currentSection = Array.from(sections).find(item => {
        return item.getAttribute('data-section-content') === clickedLabel.forValue
      })
      activeContent.innerHTML = ''
      activeContent.appendChild(currentSection)
    }
  })

  sectionTabsPills.addEventListener('scroll', () => {
    if (sectionTabsPills.scrollLeft > 0) {
      sectionTabs.classList.add('sectionTabs--Scrolled')
    } else {
      sectionTabs.classList.remove('sectionTabs--Scrolled')
    }
  })
})