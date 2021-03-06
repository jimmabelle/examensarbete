// Get the modal & modal overlay
var modalOne = document.getElementById('modal-one');
var modalTwo = document.getElementById('modal-two');

// Get the button that opens the modal
var btnReg = document.getElementById('reg-btn');
var btnLog = document.getElementById('log-btn');

// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName('modal-close-one')[0];
var spanTwo = document.getElementsByClassName('modal-close-two')[0];

// When the user clicks on the button, open the modal or close 
function addListeners() {
  if (window.addEventListener) {
    btnReg.addEventListener("click", modalReg, false);
    btnLog.addEventListener("click", modalLog, false);
    spanOne.addEventListener("click", closeReg, false);
    spanTwo.addEventListener("click", closeLog, false);
  } else if (window.attachment) {
    btnReg.addEventListener("onclick", modalReg);
    btnLog.addEventListener("onclick", modalLog);
    spanOne.addEventListener("onclick", closeReg);
    spanTwo.addEventListener("onclick", closeLog);
  }
  // add functions
  function modalReg() {
    modalOne.style.display = "block"; }
  function modalLog() {
    modalTwo.style.display = "block"; }
  function closeReg() {
    modalOne.style.display = "none"; }
  function closeLog() {
    modalTwo.style.display = "none"; }
}
window.onload = addListeners;
