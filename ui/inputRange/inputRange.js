document.addEventListener('DOMContentLoaded', () => {
  const inputRange = document.querySelectorAll('.inputRange')

  inputRange.forEach(item => {
    const input = item.querySelector('input')
    const valueBox = item.querySelector('.inputRange__value')
    input.addEventListener('input', e => {
      valueBox.innerText = Number(e.currentTarget.value).toFixed(1)
    })
  })
})