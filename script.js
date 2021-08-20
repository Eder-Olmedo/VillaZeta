let vp = document.getElementById("map");
let papel = vp.getContext("2d");

document.addEventListener("keydown", moverLobo);

//===========================================================
//TECLADO

let xlobo = 218;
let ylobo = 218;
let movimiento = 10;

function moverLobo(e) {
    let teclas =
    {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };

    switch (e.keyCode) {
        case teclas.UP:
            dibujar(xlobo, ylobo - movimiento);
            ylobo = ylobo - 10;
            break;
        case teclas.DOWN:
            dibujar(xlobo, ylobo + movimiento);
            ylobo = ylobo + 10;
            break;
        case teclas.RIGHT:
            dibujar(xlobo + movimiento, ylobo);
            xlobo = xlobo + 10;
            break;
        case teclas.LEFT:
            dibujar(xlobo - movimiento, ylobo);
            xlobo = xlobo - 10;
            break;

        default:
            break;
    }
}
//=================================================
let mapa =
{
    url: "farm.png",
    cargaOK: false
};

let vaca =
{
    url: "vaca.png",
    cargaOK: false
};

let pollo =
{
    url: "pollo.png",
    cargaOK: false
};

let cerdo =
{
    url: "cerdo.png",
    cargaOK: false
};

let lobo =
{
    url: "lobo.png",
    cargaOK: false
};


map.imagen = new Image();
map.imagen.src = mapa.url;
map.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

function cargarFondo() {
    map.cargaOK = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollo() {
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}

function cargarLobo() {
    lobo.cargaOK = true;
    dibujar();
}

let ancho = Math.floor(420 / 80);

function dibujar() {

    let xlayer = 0;
    let ylayer = 0;
    if (map.cargaOK == true) {
        papel.drawImage(map.imagen, xlayer, ylayer);

    }

    if (vaca.cargaOK == true) {
        for (let v = 0; v < aleatorio(0, ancho); v++) {
            xlayer = aleatorio(0, 420);
            ylayer = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, xlayer, ylayer);
        }

    }

    if (pollo.cargaOK == true) {
        for (let v = 0; v < aleatorio(0, ancho); v++) {
            xlayer = aleatorio(0, 420);
            ylayer = aleatorio(0, 420);
            papel.drawImage(pollo.imagen, xlayer, ylayer);
        }
    }

    if (cerdo.cargaOK == true) {
        for (let v = 0; v < aleatorio(0, ancho); v++) {
            xlayer = aleatorio(0, 420);
            ylayer = aleatorio(0, 420);
            papel.drawImage(cerdo.imagen, xlayer, ylayer);
        }
    }
    if (lobo.cargaOK == true) {
        papel.drawImage(lobo.imagen, xlobo, ylobo);

    }

}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}
