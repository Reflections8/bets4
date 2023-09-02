document.addEventListener('DOMContentLoaded', () => {

  /* Tabs */
  const sectionTabs = document.querySelector('.sectionTabs')
  const labels = sectionTabs.querySelectorAll('.pills__label')

  const sections = document.querySelectorAll('[data-section-content]')


  const activeContent = document.querySelector('.sectionTabs__ActiveContent')

  /* Set content logic */
  labels.forEach(label => {
    label.addEventListener('click', e => {
      const currentTab = e.currentTarget.getAttribute('for')
      const currentSection = Array.from(sections).find(item => {
        return item.getAttribute('data-section-content') === currentTab
      })

      activeContent.innerHTML = ''
      activeContent.appendChild(currentSection)
    })
  })

  /* TODO: return logic if suddenly moved from mobile to PC within the session */

})