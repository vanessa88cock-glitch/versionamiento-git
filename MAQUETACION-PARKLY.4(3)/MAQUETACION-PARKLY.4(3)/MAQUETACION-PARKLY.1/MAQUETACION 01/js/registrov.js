// Función que calcula el pago
function calcularPago() {
    var tipoVehiculo = document.getElementById("vehicleType").value;
    var tipoCobro = document.getElementById("paymentType").value;

    var entrada = new Date(document.getElementById("entryDate").value);
    var salida = new Date(document.getElementById("exitDate").value);

    if (!entrada || !salida || salida < entrada) {
        alert("La fecha de salida debe ser mayor que la de entrada.");
        return 0;
    }

    // Calcular tiempo
    var minutos = Math.floor((salida - entrada) / 60000);
    var horas = Math.ceil(minutos / 60);
    var dias = Math.ceil(horas / 24);

    // Tarifas
    var tarifa = 0;

    if (tipoVehiculo === "carro") {
        if (tipoCobro === "hora") tarifa = horas * 2500;
        if (tipoCobro === "dia") tarifa = dias * 12000;
        if (tipoCobro === "minuto") tarifa = minutos * 190;
    }

    if (tipoVehiculo === "moto") {
        if (tipoCobro === "hora") tarifa = horas * 1500;
        if (tipoCobro === "dia") tarifa = dias * 8000;
        if (tipoCobro === "minuto") tarifa = minutos * 120;
    }

    if (tipoVehiculo === "camion") {  
        tarifa = horas * 1000; // bicicleta por hora
    }

    document.getElementById("totalPayment").value = tarifa;
    return tarifa;
}

// Función que genera el recibo
function generateReceipt() {

    var pago = calcularPago();

    var ticket = document.getElementById("ticket").value;
    var plate = document.getElementById("plate").value;
    var paymentType = document.getElementById("paymentType").value;
    var vehicleType = document.getElementById("vehicleType").value;
    var entryDate = document.getElementById("entryDate").value;
    var exitDate = document.getElementById("exitDate").value;

    var receipt = 
        "----- RECIBO DE PAGO -----\n\n" +
        "Tiquete: " + ticket + "\n" +
        "Placa: " + plate + "\n" +
        "Tipo de cobro: " + paymentType + "\n" +
        "Vehículo: " + vehicleType + "\n" +
        "Entrada: " + entryDate + "\n" +
        "Salida: " + exitDate + "\n\n" +
        "TOTAL A PAGAR: $" + pago.toLocaleString("es-CO");

    document.getElementById("receipt").textContent = receipt;
}

// Función imprimir
function printReceipt() {
    window.print();
}