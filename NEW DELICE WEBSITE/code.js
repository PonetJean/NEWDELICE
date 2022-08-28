

// function toggleNav(){
//   if (document.getElementById("mySidenav").style.width = "0") {
//   document.getElementById("mySidenav").style.width = "80%";}

// }

function toggleNav() {
   var sideNav = document.getElementById("mySidenav");
   var openNav = document.getElementById("openNav");
   var bodyContent = document.getElementById("bodyContent");
   sideNav.classList.toggle("open");
   openNav.classList.toggle("hide");
   bodyContent.classList.toggle("pushBody");

}


// function openNav() {
//   document.getElementById("mySidenav").style.width = "80%";
// }

function closeNav() {
  sideNav.classList.toggle("open");
  openNav.classList.toggle("hide")
}