     window.onload = function () {
            var canvas = document.getElementById("drawingCanvas");
            var context = canvas.getContext("2d");

            // Draw a rectangle.
            context.fillStyle = "blue";
            context.fillRect(15, 15, 70, 70);

            // Choose the global composite operation.
            context.globalCompositeOperation = "source-atop";

            // Draw a circle overtop.
            context.fillStyle = "red";
            context.beginPath();
            context.arc(75, 75, 35, 0, Math.PI * 2, true);
            context.fill();
        };