document.addEventListener('DOMContentLoaded', () => {
  const pills = document.querySelectorAll('.pills');

  pills.forEach(item => {
    const pillsLabels = item.querySelectorAll('.pills__label');
    const pillsGlider = item.querySelector('.pills__glider');

    function updateGlider(label) {
      const labelWidth = label.clientWidth;
      const labelOffsetLeft = label.offsetLeft;

      pillsGlider.setAttribute('style',
        `width: ${labelWidth}px;
       transform: translateX(${labelOffsetLeft}px)`);
    }

    pillsLabels.forEach(label => {
      label.addEventListener('click', (e) => {
        updateGlider(e.currentTarget);
      });
    });

    setTimeout(() => {
      updateGlider(pillsLabels[0]);
    }, 0)
    window.addEventListener('resize', () => {
      setTimeout(() => {
        updateGlider(pillsLabels[0]);
      }, 0)
    })
  })

});