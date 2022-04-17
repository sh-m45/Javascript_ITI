var closeInput = document.getElementById("close");
var rightIcon = document.getElementById("rightIcon");
var leftIcon = document.getElementById("leftIcon");
var layer = document.getElementById("layer1");
var imgLayer = document.getElementById("imgLayer1");
var imgs = Array.from(document.getElementsByClassName("imag1"));
var currentImg = 0;
closeInput.addEventListener("click", colseFun);
function colseFun() {
    layer.style.display = "none";
}

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function () {
        layer.style.display = "flex";
    })
}

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {
        var imgSrc = e.target.src;
        imgLayer.style.backgroundImage = `url(${imgSrc})`;
        currentImg = imgs.indexOf(e.target);
        // console.log(currentImg) ;
    })
}

rightIcon.addEventListener("click", function () {
    currentImg++;
    if(imgs.length == currentImg)
    {
        currentImg = 0 ;
    }
    var imgSrc = imgs[currentImg].src;
    imgLayer.style.backgroundImage = `url(${imgSrc})`;
   
})

leftIcon.addEventListener("click", function () {
    currentImg--;
    if(currentImg < 0 )
    {
        currentImg = 5 ;
    }
    var imgSrc = imgs[currentImg].src;
    imgLayer.style.backgroundImage = `url(${imgSrc})`;
   
})