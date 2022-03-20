// Codigo del cuadrado


const ladoCuadrado = 5;


function perimertroCuadrado(lado){
    return lado * 4;
}  


function areaCuadrado(lado){
    return lado * lado;
} 


//codigo del Triangulo


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

function alturaTrianguloIsoceles(lado1, lado2, base) {
    if(lado1 === lado2){
        const resultado = Math.sqrt((lado1 * lado1) - ((base * base) / 4))
        return resultado
} else{
    return "No es un triangulo isoceles";
}
} 


 //Codigo del Circulo
 
 
 function diametroCirculo(radio) {
    return radio * 2;
 } 

 function perimetroCirculo(radio){
    return (radio * 2) * Math.PI;
 } 

 function areaCirculo(radio){
    return (radio * radio) * Math.PI;
 } 
 

 //INSERTANDO HTML

 //Cuadrado Form
 function calcularPerimetroCuadrado(){
     const input = document.getElementById("inputCuadrado");
     const value = input.value;

     const resultado = perimertroCuadrado(value);
     alert(resultado);
 }
 
 function calcularAreaCuadrado(){
     const input = document.getElementById("inputCuadrado");
     const value = input.value;

     const resultado = areaCuadrado(value)
     alert(resultado)
 }
 
 //Triangulo Form
function calcularPerimetroTriangulo(){
    const lado1 = parseInt(document.getElementById("trianguloLado1").value);
    const lado2 = parseInt(document.getElementById("trianguloLado2").value);
    const base = parseInt(document.getElementById("trianguloBase").value);
  
    const resultado = perimetroTriangulo(lado1, lado2, base);
    alert(resultado)
}

function calcularAreaTriangulo(){
    const altura = document.getElementById("trianguloAltura").value;
    const base = document.getElementById("trianguloBase").value;

    const resultado = areaTriangulo(base, altura);
    alert(resultado)
}

function calcularAlturaTriangulo(){
    const lado1 = document.getElementById("trianguloLado1").value;
    const lado2 = document.getElementById("trianguloLado2").value;
    const base = document.getElementById("trianguloBase").value;
    const resultado = alturaTrianguloIsoceles(lado1, lado2, base);
    alert(resultado)
}

//Circulo Form
function calcularDiametroCirculo(){
    const radio = document.getElementById("circuloRadio").value;

    const resultado = diametroCirculo(radio)
    alert(resultado)
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("circuloRadio").value;

    const resultado = perimetroCirculo(radio)
    alert(resultado)
}

function calcularAreaCirculo(){
    const radio = document.getElementById("circuloRadio").value;

    const resultado = areaCirculo(radio)
    alert(resultado)
}



