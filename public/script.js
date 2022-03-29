(function () {
    window.startTime = (new Date).getTime();
    window.addEventListener('load',function () {
        document.getElementById('load-time').innerHTML=((new Date).getTime() - window.startTime) + 'ms';
    });
})();
window.onload= function (){
    document.querySelectorAll("[data-nav]").forEach(function (element){
        if(element.href === document.location.href){
            element.classList.add("navi");
        }
    })
}
