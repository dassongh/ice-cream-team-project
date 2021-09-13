(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-about-open]"),
    closeModalBtn: document.querySelector("[data-close-button]"),
    modal: document.querySelector("[data-about-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop-about__is-hidden");
  }
})();
