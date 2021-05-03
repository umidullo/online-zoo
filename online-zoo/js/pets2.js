const sliderContent = document.querySelector('.pet-slider__content');
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const sliderItems = document.querySelectorAll('.pet-slider__item');
const rangeInput = document.querySelector('.pets__progress .progress__input')
const rangeOutput = document.querySelector('.pets__progress .progress__current')

let currentPosition = 0;
let activeCardIndex = 0;
let sliderItemsLength = sliderItems.length

sliderItems[0].querySelector('.card__description').style.display = 'block'

let visibleCards = [0, 1, 2, 3];

const setVisibleCards = (direction) => {
  if (direction === 'right') {
    visibleCards.push(visibleCards[3] + 1)
    visibleCards.shift();
  }
  else if (direction === 'left') {
    visibleCards.unshift(visibleCards[0] - 1)
    visibleCards.pop();
  }
}

const setPosition = (direction) => {
  if (direction === 'right') {
    if (activeCardIndex === 0) {
      currentPosition = 0;
      visibleCards = [0, 1, 2, 3]
    } else if (activeCardIndex === visibleCards[3] + 1) {
      currentPosition -= 100;
      setVisibleCards('right')
    }
  }
  else if (direction === 'left') {
    if (activeCardIndex === 7) {
      currentPosition = -400;
      visibleCards = [4, 5, 6, 7]
    } else if (activeCardIndex === visibleCards[0] - 1) {
      currentPosition += 100;
      setVisibleCards('left')
    }
  }
  sliderItems.forEach(slide => slide.style.transform = `translateX(${currentPosition}%)`);
}

const setActiveCard = (direction) => {
  if (direction === 'right') {
    if (activeCardIndex >= sliderItemsLength) {
      activeCardIndex = 0;
      sliderItems[7].querySelector('.card__description').style.display = 'none'
    } else {
      sliderItems[activeCardIndex - 1].querySelector('.card__description').style.display = 'none'
    }
  } else if (direction === 'left') {
    if (activeCardIndex < 0) {
      activeCardIndex = sliderItemsLength - 1;
      sliderItems[0].querySelector('.card__description').style.display = 'none';
    } else {
      sliderItems[activeCardIndex + 1].querySelector('.card__description').style.display = 'none'
    }
  }
  sliderItems[activeCardIndex].querySelector('.card__description').style.display = 'block'
}

rightBtn.addEventListener('click', () => {
  activeCardIndex += 1;
  // validate(activeCardIndex);
  setActiveCard('right');
  setPosition('right');
  rangeInput.value = activeCardIndex + 1
  rangeOutput.innerHTML = `<b>0${rangeInput.value}</b><span>/</span>08`;
});

leftBtn.addEventListener('click', () => {
  activeCardIndex -= 1;
  setActiveCard('left');
  setPosition('left')
  rangeInput.value = activeCardIndex + 1
  rangeOutput.innerHTML = `<b>0${rangeInput.value}</b><span>/</span>08`;
});

rangeInput.addEventListener('input', (event) => {
  let rangeInputValue = +rangeInput.value
  const direction = activeCardIndex === rangeInputValue ? 'left' : 'right';
  activeCardIndex = rangeInputValue - 1;
  setActiveCard(direction);
  setPosition(direction);
  rangeOutput.innerHTML = `<b>0${rangeInput.value}</b><span>/</span>08`;
})
