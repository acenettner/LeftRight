var c = document.getElementById("c").getContext("2d");
var go = false; var b = [160, 64]; var s = 0; var t = null;
for (var i = 2; i < 8; i++) {r(b);}
d(b);
document.addEventListener("keydown", (e)=> {
    if (!go) {
        if (t == null) {t = Date.now();}
        if (e.key == 'ArrowRight') {g(b, 160);}
        if (e.key == 'ArrowLeft') {g(b, 64);}
    } else if (e.key == 'Enter') {go = false;s = 0;t = null;}
})
function g(b, i) {
    if (Date.now() - t >= 500 || b[0] != i) {
        alert("Final score: " + s);
        go = true;
    } else if (b[0] == i) {t = Date.now();}
    s++; b.shift(); r(b); d(b);
}
function d(b) {
    c.clearRect(0, 0, 256, 256);
    c.fillStyle = 'black';
    c.fillRect(0, 0, 256, 256);
    c.fillStyle = 'white';
    var j = 224;
    for (var i = 0; i < b.length; i++) {
        c.fillRect(b[i], j, 32, 32);
        j -= 32;
    }
}
function r(b) {
    var r = Math.floor(Math.random()*10);
    if (r < 5) {b.push(64);}
    if (r > 4) {b.push(160);}
}