function openNav() {
  document.getElementById("menu").style.width = "15rem";
  document.getElementById("main").style.marginLeft = "15rem";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}