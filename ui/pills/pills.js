document.addEventListener('DOMContentLoaded', () => {
  const pills = document.querySelectorAll('.pills');

  pills.forEach(item => {
    const currentContainer = item.closest('.pillsContainer')

    const checkScrollAppearance = () => {
      // SCROLL APPEARS
      if (item.scrollWidth > item.clientWidth) {
        currentContainer.classList.add('pillsContainer--WithScroll')
        // SCROLL DISAPPEARS
      } else {
        currentContainer.classList.remove('pillsContainer--WithScroll')
      }
    }

    item.addEventListener('scroll', () => {
      if (item.scrollLeft > 0) {
        currentContainer.classList.add('pillsContainer--Scrolled')
      } else {
        currentContainer.classList.remove('pillsContainer--Scrolled')
      }
    })

    const pillsLabels = item.querySelectorAll('.pills__label');
    const pillsGlider = item.querySelector('.pills__glider');

    function updateGlider(label) {
      const labelWidth = label.clientWidth;
      const labelOffsetLeft = label.offsetLeft;

      pillsGlider.setAttribute('style',
        `width: ${labelWidth}px;
       transform: translateX(${labelOffsetLeft}px)`);
    }

    // Define an object, to prevent 'let' usage
    const currentLabel = {
      domNode: null
    }

    pillsLabels.forEach(label => {
      label.addEventListener('click', (e) => {
        const currentLink = e.currentTarget.closest('a')
        currentLink?.click()

        e.preventDefault()

        const currentForAttr = e.currentTarget.getAttribute('for')
        const currentInput = item.querySelector(`#${currentForAttr}`)
        currentInput.checked = true

        currentLabel.domNode = e.currentTarget
        updateGlider(e.currentTarget);
      });
    });

    // Resize glider to default [0] checked label
    setTimeout(() => {
      updateGlider(pillsLabels[0]);
    }, 300)

    // Set glider to current checked input
    window.addEventListener('resize', () => {
      checkScrollAppearance()
      setTimeout(() => {
        if (currentLabel.domNode) {
          updateGlider(currentLabel.domNode);
        } else {
          // if current pills component is not clicked yet we set glider to default label[0] element
          updateGlider(pillsLabels[0])
        }
      }, 0)
    })
    setTimeout(() => {
      checkScrollAppearance()
    }, 0)
  }) // forEach

});