document.addEventListener('DOMContentLoaded', () => {
  let selects = document.querySelectorAll(".dropdown__select");

  selects.forEach((select) => {
    let defaultValue = select.querySelector(".dropdown__select-defaultValue");
    let optionList = select.querySelector(".dropdown__select-list");
    let options = optionList.querySelectorAll("a");

    defaultValue.addEventListener("click", (e) => {
      e.stopPropagation();
      optionList.classList.toggle("select-hide");
      defaultValue.classList.toggle("dropdown__select-defaultValue--MenuOpened");
    });

    options.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        defaultValue.innerHTML = option.innerHTML;

        let activeOption = optionList.querySelector(".active");
        if (activeOption) {
          activeOption.classList.remove("active");
        }
        option.classList.add("active");

        optionList.classList.add("select-hide");
        defaultValue.classList.remove("dropdown__select-defaultValue--MenuOpened");

        const currentLanguage = option.getAttribute('data-link-custom-icon');
        defaultValue.setAttribute('data-link-custom-icon', currentLanguage);
      });
    });
  });

  document.addEventListener("click", () => {
    selects.forEach((select) => {
      let optionList = select.querySelector(".dropdown__select-list");
      if (!optionList.classList.contains("select-hide")) {
        optionList.classList.add("select-hide");

        let defaultValue = select.querySelector(".dropdown__select-defaultValue");
        defaultValue.classList.remove("dropdown__select-defaultValue--MenuOpened");
      }
    });
  });
});