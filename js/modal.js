function openModal(modalId) {
  var modalOverlay = document.getElementById(modalId + "Overlay");
  var modal = document.getElementById(modalId);
  modalOverlay.classList.add("active");
  modal.classList.add("active");
}

function closeModal(modalId) {
  var modalOverlay = document.getElementById(modalId + "Overlay");
  var modal = document.getElementById(modalId);
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
}
