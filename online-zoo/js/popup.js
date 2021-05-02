const button1 = document.getElementById('popup-button1');
const button2 = document.getElementById('popup-button2');
const button3 = document.getElementById('popup-button3');
const popupCover = document.querySelector('.popup-cover');
const formElem = document.querySelector('.popup__wrapper');
const sendBtn = document.getElementById('send');
const nameField = document.getElementById('name');

const validate = (e) => {

  if (nameField.validity.valid) {
    sendBtn.classList.remove('invalid');
  } else {
    sendBtn.classList.add('invalid');
  }
}

const showPopup = () => {
  popupCover.classList.remove('hidden');
  formElem.classList.remove('hidden');
  document.body.classList.add('not-scrollable');
}

const hidePopup = () => {
  popupCover.classList.add('hidden');
  formElem.classList.add('hidden');
  document.body.classList.remove('not-scrollable');
}

button1.addEventListener('click', () => showPopup())
button2.addEventListener('click', () => showPopup())
button3.addEventListener('click', () => showPopup())
popupCover.addEventListener('click', () => hidePopup())
sendBtn.addEventListener('click', () => {
  if (sendBtn.classList.contains('invalid')) return;
  hidePopup()
})
nameField.addEventListener('input', () => validate())