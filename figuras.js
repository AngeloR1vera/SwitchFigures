var lado, base, altura, radio, opcion, resultado
const PI=3.14156
opcion = parseInt(prompt("Seleccione el tipo de figura al que le quiere hayar el área: 1. Cuadrado, 2. Triángulo, 3. Circulo"))
switch (opcion) {
    case 1:
        lado = parseInt (prompt("Ingrese el valor del lado en cm"))
        resultado = lado*lado
        alert("El área del cuadrado es igual a " +resultado + "Centimetros cuadrados")
        break;

    case 2:
        base =   parseInt (prompt("Ingrese el valor de la base en cm"))
        altura = parseInt(prompt("Ingrese el valor de la altura en centimetros"))
        resultado = (base*altura)/2
        alert("El área del triángulo es igual a " +resultado + "Centimetros cuadrados")
        break;    

    case 3:
        radio =   parseInt (prompt("Ingrese el valor del radio en cm"))
        resultado = radio*radio*PI
        alert("El área del circulo es igual a " +resultado + "Centimetros cuadrados")
        break; 

    default:
        alert ("La opción escogida es valida")
        break;

}
/* código para encontrar áreas de figuras */