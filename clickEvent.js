let imgObj = document.getElementById("myImage");

window.onload = init;
function init() {
  imgObj = document.getElementById("myImage");
  imgObj.style.position = "relative";
  imgObj.style.left = "0px";
}

function moveRight() {
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}
