let loader = document.getElementById('loading');

window.addEventListener("load", function (){
    loader.style.transition = "opacity 700ms";
    loader.style.opacity = 0;
    setTimeout(loaderHide, 1000);
})
function loaderHide(){
    loader.style.display = `none`;
}