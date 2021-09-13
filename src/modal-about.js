(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-about-open]"),
    closeModalBtn: document.querySelector("[data-close-button]"),
    modal: document.querySelector("[data-about-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener('click', (e) => {
    if (e.currentTarget === e.target) toggleModal();
  })

  function toggleModal() {
    refs.modal.classList.toggle("backdrop-about__is-hidden");
  }
})();
