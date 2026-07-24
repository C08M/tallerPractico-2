function filtrarProductos() {
    var texto = document.getElementById("buscador").value.toLowerCase();
    var categoria = document.getElementById("categoria").value;
    var productos = document.getElementsByClassName("producto");

    for (var i = 0; i < productos.length; i++) {
        var nombre = productos[i].querySelector("h3").textContent.toLowerCase();
        var catProducto = productos[i].getAttribute("data-categoria");

        var coincideTexto = nombre.indexOf(texto) !== -1;
        var coincideCategoria = false;

        if (categoria === "todas" || categoria === catProducto) {
            coincideCategoria = true;
        }

        if (coincideTexto && coincideCategoria) {
            productos[i].style.display = "flex";
        } else {
            productos[i].style.display = "none";
        }
    }
}

/* Ejercicios */

function evaluarEstudiante(notas) {
    var suma = 0;

    for (var i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }

    var promedio = suma / notas.length;

    if (promedio >= 7) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

var resultado = evaluarEstudiante([0, 0, 0, 0, 0]);
console.log(resultado); 

function contarParesImpares(numeros) {
    var pares = 0;
    var impares = 0;

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares = pares + 1;
        } else {
            impares = impares + 1;
        }
    }

    return "Pares: " + pares + ", Impares: " + impares;
}

var resultado = contarParesImpares([34, 23, 3, 4, 5, 6, 5, 145]);
console.log(resultado); 

function clasificarTemperaturas(temperaturas) {
    var diasMuyCalurosos = 0;

    for (var i = 0; i < temperaturas.length; i++) {
        var temp = temperaturas[i];
        var categoria = "";

        switch (true) {
            case (temp < 10):
                categoria = "Frio";
                break;
            case (temp >= 10 && temp < 20):
                categoria = "Templado";
                break;
            case (temp >= 20 && temp < 30):
                categoria = "Calido";
                break;
            default:
                categoria = "Muy caluroso";
        }

        console.log("Dia " + (i + 1) + ": " + temp + " grados - " + categoria);

        if (categoria === "Muy caluroso") {
            diasMuyCalurosos = diasMuyCalurosos + 1;
        }
    }

    return diasMuyCalurosos;
}

var resultado = clasificarTemperaturas([0, 0, 0, 0, 0, 0, 0]);
console.log("Dias muy calurosos: " + resultado);