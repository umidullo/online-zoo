const slider = document.querySelector('.video_slider_content');
const mainVideo = document.querySelector('.video_main iframe')

slider.addEventListener('click', (e) => {
  const link = e.target.nextElementSibling.src;
  const fakeLink = mainVideo.src;
  mainVideo.src = link;
  e.target.nextElementSibling.src = fakeLink;
})