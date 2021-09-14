(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-contacts-open]"),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector("[data-contacts-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener('click', (e) => {
    if (e.currentTarget === e.target) toggleModal();
  })

  function toggleModal() {
    refs.modal.classList.toggle("backdrop-contacts__is-hidden");
  }
})();