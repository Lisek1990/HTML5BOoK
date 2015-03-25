window.onload = function () {
    var canvas = document.getElementById("drawingCanvas");
    var context = canvas.getContext("2d");

    // Przesuwa punkt zerowy. 
    // W ten sposób oś obrotu transformaty znajduje się na środku płótna. 
    context.translate(100, 100);

    // Rysuje 10 kwadratów. 
    var copies = 10;
    for (var i = 1; i < copies; i++) {
        // Przed narysowaniem kwadratu, obraca układ współrzędnych. 
        // Pełny obrót wynosi 2*Math.PI. Ten fragment kodu przesuwa układ o ułamek
        // tej wartości, więc do czasu wykonania pełnego obrotu narysuje wszystkie kwadraty. 
        context.rotate(2 * Math.PI * 1 / (copies - 1));

        // Rysuje pojedynczy kwadrat. 
        context.rect(0, 0, 60, 60);
    }
    context.strokeStyle = "red";
    context.stroke();
};