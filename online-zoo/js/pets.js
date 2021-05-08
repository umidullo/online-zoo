const motherContent = document.querySelector('.animals__content');
const slides = document.querySelectorAll('.animals-slide-mini');
const inputElem = document.querySelector('.animals__progress .progress__input');
const outputElem = document.querySelector('.animals__progress .progress__current');

motherContent.addEventListener('click', (e) => {
  const clickedElem = e.target.closest('.animals-slide-mini');
  if (!clickedElem) return;
  document.querySelector('.animals-slide').classList.remove('animals-slide');
  clickedElem.classList.add('animals-slide');
  const activeIndex = clickedElem.dataset.index;
  inputElem.value = activeIndex;
  outputElem.innerHTML = `<b>0${inputElem.value}</b><span>/</span>08`;
  motherContent.style.transform = `translateX(${-186 * (activeIndex - 2)}px)`;
});

inputElem.addEventListener('input', (event) => {
  let index = inputElem.value - 1;
  // if (index < 7 && index >= 0) {
  //   if (slides[index + 1].classList.contains('animals-slide')) {
  //     slides[index + 1].classList.remove('animals-slide')
  //   } else if (slides[index - 1].classList.contains('animals-slide')) {
  //     slides[index - 1].classList.remove('animals-slide')
  //   }
  // }
  // if (index === 7) slides[index - 1].classList.remove('animals-slide');
  slides.forEach(e => {
    e.classList.remove('animals-slide');
  })
  slides[index].classList.add('animals-slide')
  motherContent.style.transform = `translateX(${-186 * (index - 1)}px)`;
  outputElem.innerHTML = `<b>0${inputElem.value}</b><span>/</span>08`;
})