document.addEventListener('DOMContentLoaded', () => {

  // Closing logic
  const closeIcons = document.querySelectorAll('.notificationBox__closeIcon')
  closeIcons.forEach(icon => {
    icon.addEventListener('click', e => {
      e.currentTarget.closest('.notificationBox').classList.add('hidden')
    })
  })

})