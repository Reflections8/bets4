document.addEventListener('DOMContentLoaded', () => {
  const pills = document.querySelector('.pills');
  const pillsLabels = pills.querySelectorAll('.pills__label');
  const pillsGlider = pills.querySelector('.pills__glider');

  function updateGlider(label) {
    const labelWidth = label.clientWidth;
    const labelOffsetLeft = label.offsetLeft;

    pillsGlider.setAttribute('style',
      `width: ${labelWidth}px;
       transform: translateX(${labelOffsetLeft}px)`);
  }

  setTimeout(() => {
    updateGlider(pillsLabels[0]);
  }, 0)

  pillsLabels.forEach(label => {
    label.addEventListener('click', (e) => {
      updateGlider(e.currentTarget);
    });
  });
});