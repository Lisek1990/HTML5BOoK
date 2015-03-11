  function CalculateBMI(cm, kg, resultElementName) {
          kg = Number(kg);
          cm = Number(cm);

          var meters = cm / 100;
          var BMI = "" + Math.round(10 * kg / (meters * meters)) / 10;

          var resultElement = document.getElementById(resultElementName);
          resultElement.innerHTML = BMI.replace(".", ",");