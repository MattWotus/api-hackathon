var modalOverlay = document.getElementsByClassName("modal-overlay")[0];

function displayModal() {
  modalOverlay.classList.remove("hidden");
};

window.onresize = displayModal;
