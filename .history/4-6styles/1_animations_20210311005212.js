function virusTwo () {
    var first = document.getElementById("vTwo")
    first.style.WebkitAnimation = "appear 0.5s linear"
    first.style.opacity = 1;
}
function virusThree () {
    var second = document.getElementById("vThree")
    second.style.WebkitAnimation = "appear 0.5s linear"
    second.style.opacity = 1;
}

setTimeout(virusTwo, 2000)
setTimeout(virusThree, 4000)

function maskOn () {
    var patient = document.getElementById("maskon")
    var button = document.getElementById("safetyButton")

    patient.style.WebkitAnimation = "appear 0.5s linear"
    patient.style.opacity = 1;

    button.style.display = "none"
}

function movedudes () {
    var mask1 = document.getElementById("leftdude")
    mask1.style.WebkitAnimation = "moveleft 0.5s linear"
    mask1.style.left = "60px"

    var mask2 = document.getElementById("rightdude")
    mask2.style.WebkitAnimation = "moveright 0.5s linear"
    mask2.style.right = "60px"

    var button = document.getElementById("safetyButton")
    button.style.display = "none"
}


