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
        const parentCard = e.currentTarget.closest('.matchCard')

        const firstTeamPercent = parentCard
          .querySelector('.matchCard__body-main-textInfo--FirstTeam')
          .querySelector('.matchCard__body-main-textInfo-value')

        const secondTeamPercent = parentCard
          .querySelector('.matchCard__body-main-textInfo--SecondTeam')
          .querySelector('.matchCard__body-main-textInfo-value')

        const score = parentCard
          .querySelector('.matchCard__body-main-MatchScore')


        const currentTeam1Percent = e.currentTarget.getAttribute('data-tab-team1-percent')
        const currentTeam2Percent = e.currentTarget.getAttribute('data-tab-team2-percent')
        const currentScore = e.currentTarget.getAttribute('data-tab-score')

        firstTeamPercent.innerText = currentTeam1Percent
        secondTeamPercent.innerText = currentTeam2Percent
        score.innerText = currentScore

      })
    })
  })

})