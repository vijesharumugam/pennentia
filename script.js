var sidenavbar = document.querySelector(".side-navbar")


function shownav(){
    sidenavbar.style.left="0"

}
function closenav(){
    sidenavbar.style.left="-100%"
}

var productcontainer = document.getElementById("product")
var search = document.getElementById("search-id")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()

    for (var i = 0;i<productlist.length;i++)
        {
            var productname = productlist[i].querySelector("p").textContent

            if(productname.toUpperCase().indexOf(enteredvalue)<0){
                productlist[i].style.display="none"
            }
            else
            {
                productlist[i].style.display="block"
            }
        }
})