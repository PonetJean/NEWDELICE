


function toggleNav() {
   let sideNav = document.getElementById("mySidenav");
   let openNav = document.getElementById("openNav");
   let bodyContent = document.getElementById("bodyContent");
   let footer = document.getElementById("footer");
   sideNav.classList.toggle("open");
   openNav.classList.toggle("hide");
   bodyContent.classList.toggle("pushBody");
   footer.classList.toggle("hide");
   document.body.classList.toggle("stopscroll");
 }

 function closeNav() {
  sideNav.classList.toggle("open");
  openNav.classList.toggle("hide")
}


const allimgProduits = document.querySelectorAll(".imgproduit");
// function showinfos(){
//   const allfondProduits = document.querySelectorAll(".fondproduit");
//   allfondProduits[i].classList.toggle("showinfos");
// }
for (i=0; i < allimgProduits.length; i++){
  let imgProduit = allimgProduits[i];
  imgProduit.addEventListener("click", function() {
        this.previousElementSibling.classList.toggle("showinfos")
  })
}



