const toggle = document.getElementById("togglerbar");
const menulist = document.getElementById("menulist");

toggle.addEventListener("click", showlist);

function showlist() {
    menulist.classList.toggle("show");
}
