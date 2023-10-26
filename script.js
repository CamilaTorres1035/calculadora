const operador1 = document.getElementById("operador1")
const operador = document.getElementById("operador")
const operador2 = document.getElementById("operador2")
const btnCalcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

btnCalcular.addEventListener("click", calcular)
function calcular(){
    let operacion = operador.value
    let x = parseFloat(operador1.value)
    let y = parseFloat(operador2.value)
    let respuesta

    if((operacion === "+" ||
    operacion === "-" ||
    operacion === "/" ||
    operacion === "*") &&
    !isNaN(x) &&
    !isNaN(y)){
        switch (operacion) {
            case "+":
                respuesta = x + y
                break;
            case "-":
                respuesta = x - y
                break;
            case "/":
                respuesta = x / y
                break;
            case "*":
                respuesta = x * y
                break
        }
        resultado.style="color: black;"
        resultado.innerText = "resultado= " +respuesta
    } else{
        resultado.style="color: red;"
        resultado.innerText="No es posible hacer el calculo, operador no identificado"
    }
}