const CHECKBOX = document.getElementById('checkbox');
const BODY = document.querySelector('body');

CHECKBOX.addEventListener('change', () => {
  if (BODY.classList.contains('light')) {
    BODY.classList.remove('light')
    BODY.classList.add('dark')
  } else {
    BODY.classList.remove('dark')
    BODY.classList.add('light')
  }
});
