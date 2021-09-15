(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-info-modal-open]'),
    closeModalBtn: document.querySelector('[data-info-modal-close]'),
    modal: document.querySelector('[info-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', (e) => {
    if (e.currentTarget === e.target) toggleModal();
  })

  function toggleModal() {
    document.body.classList.toggle('info-modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
