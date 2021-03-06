const sliderContent = document.querySelector('.fslider__content');
const sliderItems = document.querySelectorAll('.fslider__item');
const rightBtn = document.querySelector('.btn-right');
const leftBtn = document.querySelector('.btn-left');
const mapInput = document.querySelector('.favor__progress .progress__input');
const mapOutput = document.querySelector('.favor__progress .progress__current');
const markers = document.querySelectorAll('.map__points');
const mapBtn = document.querySelector('.map__button');
const markersSvg = document.querySelector('.map__marker')

let curPos = 2;
let maxVal = sliderItems.length

markers[3].querySelector('.point__hint').style.opacity = 1;
markers[3].querySelector('.point__hint').style.visibility = 'visible';
markers[3].querySelector('path').style.fill = '#eb5757';

let petsPos = ['eagle', 'alligator', 'gorilla', 'panda']



const activateMarker = (animal) => {
  if (
    animal !== 'eagle' &&
    animal !== 'alligator' &&
    animal !== 'gorilla' &&
    animal !== 'panda'
  ) {
    mapBtn.href = `../../../online-zoo/pages/map/index.html`
  }
  if (animal === 'eagle') {
    markers[0].querySelector('.point__hint').style.opacity = 1;
    markers[0].querySelector('.point__hint').style.visibility = 'visible';
    markers[0].querySelector('path').style.fill = '#eb5757';
    mapBtn.href = `../../../online-zoo/pages/zoos/${animal}/index.html`
  } else {
    markers[0].querySelector('.point__hint').style.opacity = 0;
    markers[0].querySelector('.point__hint').style.visibility = 'hidden';
    markers[0].querySelector('path').style.fill = '';
  }
  if (animal === 'alligator') {
    markers[1].querySelector('.point__hint').style.opacity = 1;
    markers[1].querySelector('.point__hint').style.visibility = 'visible';
    markers[1].querySelector('path').style.fill = '#eb5757';
    mapBtn.href = `../../../online-zoo/pages/zoos/${animal}/index.html`
  } else {
    markers[1].querySelector('.point__hint').style.opacity = 0;
    markers[1].querySelector('.point__hint').style.visibility = 'hidden';
    markers[1].querySelector('path').style.fill = '';
  }
  if (animal === 'gorilla') {
    markers[2].querySelector('.point__hint').style.opacity = 1;
    markers[2].querySelector('.point__hint').style.visibility = 'visible';
    markers[2].querySelector('path').style.fill = '#eb5757';
    mapBtn.href = `../../../online-zoo/pages/zoos/${animal}/index.html`
  } else {
    markers[2].querySelector('.point__hint').style.opacity = 0;
    markers[2].querySelector('.point__hint').style.visibility = 'hidden';
    markers[2].querySelector('path').style.fill = '';
  }
  if (animal === 'panda') {
    markers[3].querySelector('.point__hint').style.opacity = 1;
    markers[3].querySelector('.point__hint').style.visibility = 'visible';
    markers[3].querySelector('path').style.fill = '#eb5757';
    mapBtn.href = `../../../online-zoo/pages/zoos/${animal}/index.html`
  } else {
    markers[3].querySelector('.point__hint').style.opacity = 0;
    markers[3].querySelector('.point__hint').style.visibility = 'hidden';
    markers[3].querySelector('path').style.fill = '';
  }
}

markersSvg.addEventListener('click', (e) => {
  const clickedElem = e.target.closest('.point').dataset.name
  const clickedElemIndex = e.target.closest('.point').dataset.index
  activateMarker(clickedElem)
  sliderItems.forEach(e => e.classList.remove('fslider__item_active'))
  sliderItems[clickedElemIndex].classList.add('fslider__item_active');
  const activeIndex = e.target.closest('.point').dataset.index;
  let num = +activeIndex + +1;
  mapInput.value = num;
  mapOutput.innerHTML = `<b>0${mapInput.value}</b><span>/</span>08`;

});

sliderContent.addEventListener('click', (e) => {
  const clickedElem = e.target.closest('.fslider__item');
  if (!clickedElem) return;
  activateMarker(clickedElem.dataset.name);
  sliderItems.forEach((elem) => elem.classList.remove('fslider__item_active'));
  clickedElem.classList.add('fslider__item_active');
  const activeIndex = clickedElem.dataset.index;
  mapInput.value = activeIndex;
  mapOutput.innerHTML = `<b>0${mapInput.value}</b><span>/</span>08`;
});


const activateCard = (position) => {
  if (position === 'right') {
    if (curPos >= maxVal) {
      curPos = 1;
      sliderItems[maxVal - 1].classList.remove('fslider__item_active');
      sliderItems[curPos - 1].classList.add('fslider__item_active');
    } else {
      curPos += 1;
      sliderItems[curPos - 2].classList.remove('fslider__item_active');
      sliderItems[curPos - 1].classList.add('fslider__item_active');
    }
    mapInput.value = curPos;
  }
  else if (position === 'left') {
    if (curPos === 1) {
      sliderItems[0].classList.remove('fslider__item_active');
      curPos = 8;
      sliderItems[maxVal - 1].classList.add('fslider__item_active');
    } else {
      curPos -= 1;
      sliderItems[curPos].classList.remove('fslider__item_active');
      sliderItems[curPos - 1].classList.add('fslider__item_active');
    }
    mapInput.value = curPos;
  }
  let activePet = sliderItems[curPos - 1].dataset.name;
  activateMarker(activePet);
  mapOutput.innerHTML = `<b>0${mapInput.value}</b><span>/</span>08`;
}


rightBtn.addEventListener('click', () => {
  activateCard('right')
})
leftBtn.addEventListener('click', () => {
  activateCard('left')
})

mapInput.addEventListener('input', (event) => {
  let mapInputValue = +mapInput.value
  const direction = curPos - 1 === mapInputValue ? 'left' : 'right';
  activateCard(direction)
  mapOutput.innerHTML = `<b>0${mapInput.value}</b><span>/</span>08`;
})
