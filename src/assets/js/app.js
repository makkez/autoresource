var canvas = document.getElementById('triangle');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(0, 0);
context.lineTo(600, 0);
context.lineTo(300, 90);
context.lineTo(0, 0);

context.closePath();
context.shadowColor = "rgba(0, 0, 0, 0.06)";
context.shadowBlur = 7;
context.shadowOffsetX = 2;
context.shadowOffsetY = 5;
context.fillStyle = "rgba(256, 256, 256, 1)";
context.fill();
