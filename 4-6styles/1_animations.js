function virusTwo () {
    var first = document.getElementById("vTwo")
    first.style.WebkitAnimation = "virus 0.5s linear"
    first.style.opacity = 1;
}
function virusThree () {
    var second = document.getElementById("vThree")
    second.style.WebkitAnimation = "virus 0.5s linear"
    second.style.opacity = 1;
}

setTimeout(virusTwo, 2000)
setTimeout(virusThree, 4000)