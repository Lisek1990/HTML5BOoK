window.onload = function() {
  var canvas = document.getElementById("drawingCanvas");
  var context = canvas.getContext("2d");

  context.lineWidth = 20;
  context.strokeStyle = "rgb(205,40,40)";

  context.moveTo(10,50);
  context.lineTo(400,50);
  context.lineCap = "butt";
  context.stroke();

  context.beginPath();
  context.moveTo(10,120);
  context.lineTo(400,120);
  context.lineCap = "round";
  context.stroke();

  context.beginPath();
  context.moveTo(10,190);
  context.lineTo(400,190);
  context.lineCap = "square";
  context.stroke();
};