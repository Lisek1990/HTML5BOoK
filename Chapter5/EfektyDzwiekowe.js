// Każdy z zadeklarowanych tu parametrów opisuje wygląd piłki.
function Ball(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.strokeColor = "black";
  this.fillColor = "red";
}

// Ta tablica zawiera wszystkie obiekty piłek. 
var balls = [];

var canvas;
var context;

window.onload = function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  canvas.onmousedown = canvasClick;

  // Rysuje nową klatkę po tym, jak upłynie 20 milisekund.
  setTimeout("drawFrame()", 20);
}

function addBall() {
  // Pobiera wprowadzony przez użytkownika promień piłki.
  var radius = parseFloat(document.getElementById("ballSize").value);

  // Tworzy nową piłkę.
  var ball = new Ball(50,50,1,1,radius);

  // Zachowuje piłkę w tablicy.
  balls.push(ball);

  // Włącza odtwarzanie muzyki w tle, pod warunkiem, że nie była wcześniej odgrywana.
  document.getElementById("backgroundMusic").play();
}

function clearBalls() {
  // Usuwa wszystkie piłki.
  balls = [];

  // Zatrzymuje odtwarzaną w tle muzykę i przewija nagranie do początku.
  document.getElementById("backgroundMusic").pause();
  document.getElementById("backgroundMusic").currentTime = 0;
}


function drawFrame() {
  // Czyści płótno.
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Zauważ, że w tym miejscu należy wywołać funkcję beginPath, 
  // dzięki której starsze rysunki piłek znikną. 
  context.beginPath();

  // Odczytuje po kolei piłki, jedna po drugiej.
  for(var i in balls)
  {
    // Przesuwa piłkę w nowe miejsce.
    var ball = balls[i];
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Dodaje efekt "grawitacji", który pozwala piłce opadać szybciej. 
    if ((ball.y) < canvas.height) ball.dy += 0.22;

    // Dodaje efekt "tarcia", który spowalnia ruch piłki w poziomie.
    ball.dx = ball.dx * 0.998;

    // Jeśli piłka uderzy w jedną ze ścian, zostaje od niej odbita.
    if ((ball.x + ball.radius > canvas.width) || (ball.x - ball.radius < 0)) {
boing();
      ball.dx = -ball.dx;
    }

    // Jeśli piłka uderzy w krawędź dolną zostaje odbita i odrobinę spowolniona.
    if ((ball.y + ball.radius > canvas.height) || (ball.y - ball.radius < 0)) { 
boing();
      ball.dy = -ball.dy*0.96; 
    }

    // Sprawdza, czy użytkownik wybrał opcję łączenia piłek liniami. 
    if (!document.getElementById("connectedBalls").checked) {
      context.beginPath();
      context.fillStyle = ball.fillColor;
    }
    else {
      context.fillStyle = "white";
    }

    // Rysuje piłkę.
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    context.lineWidth = 1;
    context.fill();
    context.stroke(); 
  }

  // Ustawia pauzę przed narysowaniem następnej klatki na 20 milisekund.
  setTimeout("drawFrame()", 20);
}

function canvasClick(e) {
  // Pobiera współrzędne punktu w obrębie, płótna na które użytkownik kliknął.
  var clickX = e.pageX - canvas.offsetLeft;
  var clickY = e.pageY - canvas.offsetTop;

  // Sprawdza, czy użytkownik kliknął piłkę.
  for(var i in balls)
  {
    var ball = balls[i];
    if ((clickX > (ball.x-ball.radius)) && (clickX < (ball.x+ball.radius)))
    {
      if ((clickY > (ball.y-ball.radius)) && (clickY < (ball.y+ball.radius)))
      {
        // Zmienia prędkość piłki.
        ball.dx -= 2;
        ball.dy -= 3;
        return;
      }
    }
  }
}

var audioElementCount = 3;
var audioElementIndex = 1;

function boing() {
  // Wybiera kolejny, ustawiony w sekwencji element <audio>.
  var audioElementName = "audio" + audioElementIndex;
  var audio = document.getElementById(audioElementName);

  audio.currentTime = 0;
  audio.play();

  if (audioElementIndex == audioElementCount) {
    audioElementIndex = 1;
  }
  else {
    audioElementIndex += 1;
  }
}