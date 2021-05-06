const sliderContent = document.querySelector('.fslider__content');
const sliderItems = document.querySelectorAll('.fslider__item');
const rightBtn = document.querySelector('.btn-right');
const leftBtn = document.querySelector('.btn-left');
const mapInput = document.querySelector('.favor__progress .progress__input');
const mapOutput = document.querySelector('.favor__progress .progress__current');
const markers = document.querySelectorAll('.map__points');
const mapBtn = document.querySelector('.map__button');

// console.log(mapBtn.href);

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

const activateCard = (position) => {
  if (position === 'right') {
    if (curPos >= maxVal) {
      curPos = 1;
      sliderItems[maxVal - 1].classList.remove('fslider__item_active');
      sliderItems[curPos - 1].classList.add('fslider__item_active');
      // console.log('asdf');
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
  console.log(sliderItems[curPos - 1].dataset.name)
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
