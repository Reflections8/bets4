document.addEventListener('DOMContentLoaded', () => {
  const tabsWrapper = document.querySelectorAll('.tabs__wrapper')

  tabsWrapper.forEach(wrapper => {
    const tabs = wrapper.querySelectorAll('.tab')

    const removeAllActiveClasses = () => {
      tabs.forEach(tab => {
        tab.classList.remove('tab--Active')
      })
    }
    tabs.forEach(tab => {
      tab.addEventListener('click', e => {
        removeAllActiveClasses()
        e.currentTarget.classList.add('tab--Active')

        /* Match card logic */
        const currentTab = e.currentTarget.getAttribute('data-tab-content')

        const parentCard = e.currentTarget.closest('.matchCard')

        const firstTeamPercent = parentCard
          .querySelector('.matchCard__body-main-textInfo--FirstTeam')
          .querySelector('.matchCard__body-main-textInfo-value')

        const secondTeamPercent = parentCard
          .querySelector('.matchCard__body-main-textInfo--SecondTeam')
          .querySelector('.matchCard__body-main-textInfo-value')

        const score = parentCard
          .querySelector('.matchCard__body-main-MatchScore')

        /* Fetch JSON */
        fetch('ui/matchCard/matchData.json')
          .then(rawRes => rawRes.json()
            .then(res => {
              firstTeamPercent.innerText = res[currentTab].firstTeamPercent
              secondTeamPercent.innerText = res[currentTab].secondTeamPercent
              score.innerText = res[currentTab].score
            }))
      })
    })
  })

})