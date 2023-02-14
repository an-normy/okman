var images = [
    "a.jpg",
    "b.jpg",
    "c.jpg",
    "d.jpg",
    "e.png",
    "f.png",
]
var names = [
    "soldier dummy",
    "staring dummy",
    "missing dummy",
    "question dummy",
    "baseplate dummy",
    "2D dummy"
]
var i = 0
function changedummy() {
    i++
    var numberofdummy = 5
    if (i > numberofdummy) {
        i = 0;
    }
    var updateimg = images[i];
    var updatename = names[i];
    document.getElementById("dum").src = updateimg;
    document.getElementById("dummy").innerHTML = updatename;
}