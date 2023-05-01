window.addEventListener("scroll", function () {
  toggleBacktop();
});
let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "30px";
  } else {
    backtop.style.bottom = "-50px";
  }
}

function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  document.getElementById("navbar-close").style.display = "block";
  document.getElementById("navbar-open").style.display = "none";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  document.getElementById("navbar-close").style.display = "none";
  document.getElementById("navbar-open").style.display = "block";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
