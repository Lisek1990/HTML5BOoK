 
window.onload = function() {
  var canvas = document.getElementById("drawingCanvas");
  var context = canvas.getContext("2d");

  context.fillStyle = "rgb(100,150,185)";
  context.lineWidth = 10;
  context.strokeStyle = "red";

  // Rysuje koło. 
  context.arc(110, 120, 100, 0, 2*Math.PI);
  context.fill();
  context.stroke();

  // Pamiętaj o wywołaniu metody beginPath() przed dodaniem nowej figury.
  // Inaczej, krawędzie obu figur zleją się w nieprzewidywalny sposób. 
  context.beginPath();

  // Rysuje trójkąt.
  context.moveTo(215,50);
  context.lineTo(15,250);
  context.lineTo(315,250);
  context.closePath();

  // Wypełnia trójkąt przezroczystym kolorem (ale nie krawędzie). 
  context.fillStyle = "rgba(100,150,185,0.5)";

  context.fill();
  context.stroke();
};