const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
  card.addEventListener('click', function(){
    const pageId = card.getAttribute('id')
    console.log(pageId)
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${pageId}`
  })
}

// CLOSE MODAL
document.querySelector('.close-modal').addEventListener('click', function() {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ''
})

// MAXIMIZE MODAL
const elem = document.querySelector(".modal-overlay");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    modal.classList.add('fullscreen')
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
