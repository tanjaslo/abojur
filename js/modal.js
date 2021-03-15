let modal = document.querySelector('.modal');
let openModalButton = document.querySelector('.consult__link');
let closeModalButton = modal.querySelector('.modal__close');

openModalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--open');
}); 
  
closeModalButton.addEventListener('click', function () {
  modal.classList.remove('modal--open');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove('modal--open');
  }
});