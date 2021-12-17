const upScrollBarEl = document.querySelector('.up-scroll-bar');
const sec2El = document.querySelector('.sec2');
let upScrean = false
upScrollBarEl.addEventListener('click', function () {
  upScrean = !upScrean

  if (upScrean) {
    sec2El.classList.add('up')
  } else {
    sec2El.classList.remove('up')
  }
});