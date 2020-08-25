const modal = document.querySelector('#my-modal')
const cards = document.querySelectorAll('.card')
const modalTitle = document.querySelector("#modal-title")
const modalImg = document.querySelector("#img-modal")

for (let card of cards) {
  const img = card.querySelector('.my-img')
  const author = card.querySelector('small')

  img.onclick = function () {
    modal.style.display = "flex"
    modalImg.src = this.src
    modalImg.alt = this.alt
    modalTitle.innerHTML = this.alt
    document.getElementById('modal-author').innerText = author.innerText
  }
}
