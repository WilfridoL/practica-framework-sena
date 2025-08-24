// pagina semantic
document.getElementById("menu-toggle").addEventListener("click", function () {
    $('.ui.sidebar').sidebar('toggle');
});
document.querySelector(".ui.btn-modal").addEventListener("click", function () {
    $('.ui.modal')
  .modal('show')
  ;});
document.querySelector(".ui.btn-modal-salir").addEventListener("click", function () {
    $('.ui.modal')
  .modal('hide')
  ;});
