document.addEventListener('DOMContentLoaded', () => {
  const modalWrapper = document.querySelector('.modalWrapper')
  const modalContent = document.querySelectorAll('.modalContent')

  const modalOpenButtons = document.querySelectorAll('[data-modal-button]')
  const modalCloseIcon = document.querySelectorAll('.modalContent__header-closeIcon')

  // hide all modals
  const hideAllModals = () => {
    modalContent.forEach(modal => {
      modal.classList.add('hidden')
    })
  }

  // OPENING LOGIC
  modalOpenButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      modalWrapper.classList.remove('modalWrapper--Hidden')
      hideAllModals()

      const currentBtn = e.currentTarget.getAttribute('data-modal-button')
      const currentModal = document.querySelector(`[data-modal-content=${currentBtn}]`)

      // remove hidden class from modal that matches clicked button attribute
      currentModal.classList.remove('hidden')
    })
  })


  // CLOSING LOGIC
  // Close on icon click
  modalCloseIcon.forEach(icon => {
    icon.addEventListener('click', () => {
      modalWrapper.classList.add('modalWrapper--Hidden')
    })
  })

  // Close on outside click
  modalWrapper.addEventListener('click', e => {
    if (e.target.classList.contains('modalWrapper')) {
      modalWrapper.classList.add('modalWrapper--Hidden')
    }
  })

})