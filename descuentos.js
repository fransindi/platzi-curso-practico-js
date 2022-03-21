
function descontarPrecio(precio, descuento){
    const porcentajeConComa = descuento / 100;
    const precioDescontado = precio - (precio * porcentajeConComa);
    
    return precioDescontado
};


function precioConDescuento(){
    const precio = document.getElementById("precioProducto").value;
    const descuento = document.getElementById("porcentajeDescuento").value;

    const resultado = descontarPrecio(precio, descuento);
    const resultPrice = document.getElementById("resultPrice");
    return resultPrice.innerText = "El precio con descuento es $" + resultado;
}

