var canvas;
var context;
var figure = "line";
var startX;
var startY;
var endX;
var endY;
var fillColor;
var color;

window.onload = function () {
    // Pobiera obiekt canvas i wyodrębnia z niego kontekst. 
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");

    // Dołącza funkcje do zdarzeń rysowania. 
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = mouseUp;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;

};

var isDrawing = false;

function startDrawing(e) {
    // Start drawing.
    isDrawing = true;


    if (figure == "line") {
        // Create a new path (with the current stroke color and stroke thickness).
        context.beginPath();

        // Put the pen down where the mouse is positioned.
        context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    } else if (figure == "rect") {


        startX = e.pageX - canvas.offsetLeft;
        startY = e.pageY - canvas.offsetTop;
    } else if (figure == "kolo") {
        startX = e.pageX - canvas.offsetLeft;
        startY = e.pageY - canvas.offsetTop;
    }

}




function mouseUp(e) {
    if (isDrawing == true) {
        
        if (figure == "rect") {
            endX = e.pageX - canvas.offsetLeft;
            endY = e.pageY - canvas.offsetTop;
            context.fillStyle = fillColor;
            context.fillRect(startX, startY, endX - startX, endY - startY);
            //context.strokeStyle="#0000ff";
            context.lineWidth = 3;
            context.strokeRect(startX, startY, endX - startX, endY - startY);

        } else if (figure == "kolo") {
            context.moveTo(startX,startY);
            endX = e.pageX - canvas.offsetLeft;
            endY = e.pageY - canvas.offsetTop;

            context.arc(startX, startY, 50, 0, 2 * Math.PI);
            context.fillStyle = fillColor;
            context.fill();
          //  context.strokeStyle = "#0000ff";
            context.lineWidth = 3;
          //  context.stroke();

        }

    }

    stopDrawing();
}



function stopDrawing() {
    isDrawing = false;
}

function draw(e) {
    if (isDrawing == true) {
        if (figure == "line") {
            // Find the new position of the mouse.
            var x = e.pageX - canvas.offsetLeft;
            var y = e.pageY - canvas.offsetTop;

            // Draw a line to the new position.
            context.lineTo(x, y);
            context.stroke();

        }
    }
}

var strokeColor;

function changeStroke(chosenStrokeColor, imgElement) {
    color = chosenStrokeColor;
    imgElement.className = "Selected";


}


var previousFigure;

function changeFigure(chosenFigure, imgElement) {
    figure = chosenFigure;
    imgElement.className = "Selected";

    // Return the previously clicked <img> element to its normal state.
    if (previousFigure != null) previousFigure.className = "";
    previousFigure = imgElement;
}


var previousFillColor;

function changeFillColor(chosenColor, imgElement) {

    fillColor = chosenColor;
    imgElement.className = "Selected";

    if (previousFillColor != null) previousFillColor.className = "";
    previousFillColor = imgElement;
}



// Keep track of the previous clicked <img> element for color.
var previousColorElement;

function changeColor(color, imgElement) {
    // Change the current drawing color.
    context.strokeStyle = color;


    // Give the newly clicked <img> element a new style.
    imgElement.className = "Selected";

    // Return the previously clicked <img> element to its normal state.
    if (previousColorElement != null) previousColorElement.className = "";
    previousColorElement = imgElement;
}

// Keep track of the previous clicked <img> element for thickness.
var previousThicknessElement;

function changeThickness(thickness, imgElement) {
    // Change the current drawing thickness.
    context.lineWidth = thickness;

    // Give the newly clicked <img> element a new style.
    imgElement.className = "Selected";

    // Return the previously clicked <img> element to its normal state.
    if (previousThicknessElement != null) previousThicknessElement.className = "";
    previousThicknessElement = imgElement;
}


function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
    // Find the <img> element.
    var imageCopy = document.getElementById("savedImageCopy");

    // Show the canvas data in the image.
    imageCopy.src = canvas.toDataURL();

    // Unhide the <div> that holds the <img>, so the picture is now visible.
    var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "block";
}