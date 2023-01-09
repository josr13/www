var c = document.getElementById("sample-canvas");
var cv = c.getContext("2d");

cv.font = "40px sans-serif";
cv.fillText("Hi", 20, 130);

cv.beginPath();
cv.arc(150, 70, 60, 0, 2 * Math.PI);

cv.moveTo(0, 0);
cv.lineTo(400, 200);

var grd = cv.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "darkblue");
grd.addColorStop(1, "purple");

cv.fillStyle = grd;
cv.fillRect(70, 24, 160, 100);

cv.stroke();