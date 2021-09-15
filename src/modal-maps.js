(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-maps-open]"),
      closeModalBtn: document.querySelector("[data-close-button]"),
      modal: document.querySelector("[data-maps-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modal.addEventListener('click', (e) => {
      if (e.currentTarget === e.target) toggleModal();
    })
  
    function toggleModal() {
      refs.modal.classList.toggle("backdrop-maps__is-hidden");
    }
  })();
  