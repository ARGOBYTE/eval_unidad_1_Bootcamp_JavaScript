/*
EVALUACIÓN UNIDAD 1

   Nos han encargado un controlador de gastos para una aplicación de gestión 
   de finanzas.
   El controlador debe permitir como mínimo:
   1. Añadir un gasto.
   2. Mostrar un listado de gastos.
   3. Editar un gasto.
   4. Eliminar un gasto.
*/

// Variables globales que se utilizarán

const nombrePrograma = "ControladorDeIngresosGastos"
const movimientos = JSON.parse(localStorage.getItem(nombrePrograma)) || [];
var salida = true;

// Guardar datos en localStorage
function guardarLocalStorage () {
    localStorage.setItem(nombrePrograma, JSON.stringify(movimientos));
}

// Función que crea un ID desde un método para capturar los milisegundos del sistema
function crearId() {
    let id = Date.now();
    return id;
}

// Función para convertir el formato de valor a formato de dinero
function formatearDinero(dinero) {
    const formateadorPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
    return formateadorPeso.format(dinero)
};

// Función para buscar un ingreso o gasto
function buscarMovimiento (eleccion) {
    let opciones = "Selecciona la ID del movimiento a editar: \n";
    movimientos.forEach((element) => {
        opciones += 'Id: '+ element.id +', Fecha: ' + element.fecha +', Valor: ' + element.valor + ', Concepto: ' + element.concepto + ', Tipo: ' + element.tipo + '\n';
    });
    const idElegido = parseInt(prompt(opciones));

    const elementIndex = movimientos.findIndex((obj) => obj.id == idElegido)
    if (elementIndex > -1) {
        if (eleccion == "editar") {
            editarMovimiento(elementIndex);
        } else if (eleccion == "eliminar"){
            eliminarMovimiento(elementIndex);
        }
    } else window.alert("La ID seleccionada no existe");
}

// Función para sumar los ingresos y los gastos con el fín de verificar si existen fondos para el siguiente gasto
function saldoCartera (listaDeMovimientos) {
    let sumaDeIngresos = 0;
    let sumaDeGastos = 0;
    let saldo = 0;
    listaDeMovimientos.forEach((movimiento) => {
        if (movimiento.tipo === 'Ingreso') {
            sumaDeIngresos = sumaDeIngresos + parseInt(movimiento.valor);
        } else if (movimiento.tipo === 'Gasto') {
            sumaDeGastos = sumaDeGastos + parseInt(movimiento.valor);
        }
    })
    saldo = sumaDeIngresos - sumaDeGastos;
    return saldo;
}

/* ---------------------------------------------------------------------------------------------*/

// 1. Función que agrega fondos a la cartera
function agregarFondos () {
    // La fecha y hora de la transacción la asigna segun el sistema
    let hoy = new Date(); // Instancia de un nuevo objeto Date
    const fechaIngreso = hoy.toLocaleDateString();

    // Valida que el ingreso sea efectivamente una cantidad numérica
    let agregarMonto = prompt("Ingresa el valor del ingreso: ", 0);
    while (agregarMonto == null || /\D/.test(agregarMonto) || agregarMonto == "") {
        agregarMonto = prompt("Ingresa un valor en dinero válido: ");
    };
    
    const idIngreso = crearId();
    const conceptoIngreso = prompt("Escribe el concepto del ingreso: ", " ");

    const infoMovimiento = {
        id: idIngreso,
        fecha: fechaIngreso,
        valor: agregarMonto,
        concepto: conceptoIngreso,
        tipo: 'Ingreso',
    };
    // Por último, un mensaje de confirmación para el cliente
    window.confirm('El ingreso #'+ idIngreso +' ha sido registrado con éxito');
    // La información del ingreso se adiciona al array de movimientos
    movimientos.push(infoMovimiento);
    return movimientos;
};

// 2 y 4. Función para mostrar los ingresos o los gastos realizados
function mostrarMovimientos(tipoMovimiento) {
    const listadoDeMovimientos = movimientos.filter((movimiento) => movimiento.tipo === tipoMovimiento);
    listadoDeMovimientos.length
        ? console.table(listadoDeMovimientos, ["id", "fecha", "valor", "concepto"])
        : console.info('No existe ningún '+ tipoMovimiento +' para mostrar');
};

// 3. Función para agregar un gasto como movimiento a la cartera
function agregarGasto () {
    // La fecha y hora de la transacción la asigna segun el sistema
    let hoy = new Date(); // Instancia de un nuevo objeto Date
    const fechaIngreso = hoy.toLocaleDateString();

    // Valida que el ingreso sea efectivamente una cantidad numérica
    let agregarMonto = prompt("Ingresa el valor del gasto: ", 0);
    while (agregarMonto == null || /\D/.test(agregarMonto) || agregarMonto == "") {
        agregarMonto = prompt("Ingresa un valor en dinero válido: ");
    };

    // Valida si el gasto puede registrarse con base a los ingresos que se tiene en la cartera
    const idGasto = crearId();
    const conceptoGasto = prompt("Escribe el concepto del gasto: ", " ");
    
    if (saldoCartera(movimientos) <= 0) {
        window.alert("Usted no posee saldo suficiente para el gasto que propone");
        const infoMovimiento = {
            id: idGasto,
            fecha: fechaIngreso,
            valor: 0,
            concepto: conceptoGasto,
            tipo: 'Rechazado',
        };
        movimientos.push(infoMovimiento);
        return movimientos;
    } else if (saldoCartera(movimientos) >= agregarMonto) {
        
        const infoMovimiento = {
            id: idGasto,
            fecha: fechaIngreso,
            valor: agregarMonto,
            concepto: conceptoGasto,
            tipo: 'Gasto',
        };
        // Por último, un mensaje de confirmación para el cliente
        window.confirm('El gasto #'+ idGasto +' ha sido registrado con éxito');
        // La información del gasto se adiciona al array de movimientos
        movimientos.push(infoMovimiento);
        return movimientos;
    } else {
        window.alert("Usted no posee saldo suficiente para el gasto que propone");
        const infoMovimiento = {
            id: idGasto,
            fecha: fechaIngreso,
            valor: 0,
            concepto: conceptoGasto,
            tipo: 'Rechazado',
        };
        movimientos.push(infoMovimiento);
        return movimientos;
    }
};

// 5. Función que muestra todos los movimientos de ingresos, gastos y rechazados
function mostrarTodo() {
    console.table(movimientos, ["id", "fecha", "valor", "concepto", "tipo"]);
};

// 6. Función para mostrar el balance general de la cuenta
function balanceCuenta (listaDeMovimientos) {
    let sumaDeIngresos = 0;
    let sumaDeGastos = 0;
    let saldo = 0;
    listaDeMovimientos.forEach((movimiento) => {
        if (movimiento.tipo === 'Ingreso') {
            sumaDeIngresos = sumaDeIngresos + parseInt(movimiento.valor);
        } else if (movimiento.tipo === 'Gasto') {
            sumaDeGastos = sumaDeGastos + parseInt(movimiento.valor);
        }
    })
    saldo = sumaDeIngresos - sumaDeGastos;
    const ingresos = formatearDinero(sumaDeIngresos);
    const gastos = formatearDinero(sumaDeGastos);
    const saldoPeso = formatearDinero (saldo);
    console.info("Los ingresos suman: " + ingresos);
    console.info("Los gastos totales suman: " + gastos);
    console.info("El balance corresponde a: " + saldoPeso);
}

// 7. Función para editar un ingreso o gasto
function editarMovimiento(elementIndex) {
    let editar = true;
    while (editar) {
        let opcion = prompt('Registro:\n Id: ' + movimientos[elementIndex].id + ', Fecha: ' + movimientos[elementIndex].fecha + ', Valor: ' + movimientos[elementIndex].valor + ', Concepto: ' + movimientos[elementIndex].concepto + ', Tipo: ' + movimientos[elementIndex].tipo + '\n' + '\n Elige que campo deseas modificar: ' + '\n 1)Fecha, 2)Valor, 3)Concepto, 0)Guardar');

        switch (parseInt(opcion)) {
            case 1:
                const nuevaFecha = prompt("Ingrese una nueva fecha");
                movimientos[elementIndex].fecha = nuevaFecha;
                break;

            case 2:
                const nuevoValor = prompt("Ingrese un nuevo valor");
                movimientos[elementIndex].valor = nuevoValor;
                break;

            case 3:
                const nuevoConcepto = prompt("Ingrese el nuevo concepto");
                movimientos[elementIndex].concepto = nuevoConcepto;
                break;
            
            case 0:
                guardarLocalStorage();
                editar = false;
                break;

            default:
                alert("Elige una opción correcta");
        }
    }
}

// 8. Función para eliminar un movimiento

function eliminarMovimiento(elementIndex) {
    const confirmacion = window.confirm('Movimiento: \n' + movimientos[elementIndex].id + ', Fecha: ' + movimientos[elementIndex].fecha + ', Valor: ' + movimientos[elementIndex].valor + ', Concepto: ' + movimientos[elementIndex].concepto + ', Tipo: ' + movimientos[elementIndex].tipo + '\n ¿Desea eliminarlo definitivamente?');
    if (confirmacion === true) {
        movimientos.splice(elementIndex, 1);
        guardarLocalStorage();
        window.alert('El movimiento ha sido eliminado exitosamente!');
    } else {
        window.alert('Procedimiento cancelado por el usuario');
    }
}

// Menú de opciones para el controlador de gastos
do{
    salida = false;
    let opcion = prompt("Elige una opción: \n\n1. Agregar fondos a la cartera \n2. Mostrar el histórico de ingresos \n3. Registra un gasto \n4. Mostrar el histórico de gastos \n5. Mostrar todos los movimientos \n6. Ver el saldo de la cartera \n7. Corregir un movimiento \n8. Eliminar un movimiento \n0. SALIR");

    switch(parseInt(opcion)) {
        case 0: console.log('Hasta pronto');
                salida = true;
                break;
        case 1: agregarFondos();
                break;
        case 2: mostrarMovimientos("Ingreso");
                break;
        case 3: agregarGasto();
                break;
        case 4: mostrarMovimientos("Gasto");
                break;
        case 5: mostrarTodo(movimientos);
                break;
        case 6: balanceCuenta(movimientos);
                break;
        case 7: buscarMovimiento("editar");
                break;
        case 8: buscarMovimiento("eliminar");
                break;
        default: window.alert("Opción no válida");
                 break;
    }
} while (!salida);