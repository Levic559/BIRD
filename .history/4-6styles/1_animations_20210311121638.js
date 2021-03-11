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
    mask1.style.WebkitAnimation = "moveleft 1s ease-in-out"
    mask1.style.right = "60px"

    var mask2 = document.getElementById("rightdude")
    mask2.style.WebkitAnimation = "moveright 1s ease-in-out"
    mask2.style.left = "60px"

    var button = document.getElementById("safetyButton")
    button.style.display = "none"

    function arrowAppear() {
        var distancing = document.getElementById("distancing")
        distancing.style.WebkitAnimation = "appear 0.5s linear"
        distancing.style.opacity = 1
    }


    setTimeout(arrowAppear, 1500)
}

function washhands () {
    var hands = document.getElementById("hands")
    hands.style.WebkitAnimation = "appear 0.5s linear"
    hands.style.opacity = 1

    var button = document.getElementById("safetyButton")
    button.style.display = "none"

}

function cough () {
    var cough = document.getElementById("cough")
    cough.style.WebkitAnimation = 
}


