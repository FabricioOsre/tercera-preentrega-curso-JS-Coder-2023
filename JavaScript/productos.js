const autos1 = [
  {
    id: "auto01",
    titulo: "Chevrolet Camaro SS",
    imagen: "../images/camaro.jpg",
    descripcion: "Tremenda Nave",
    precio: 180000
  },
  {
    id: "auto02",
    titulo: "Ford Mustang Shelby GT-500",
    imagen: "../images/shelby-gt500.jpg",
    descripcion: "Mas Nave que el Camaro",
    precio: 250000
  },
  {
    id: "auto03",
    titulo: "VW Phideon",
    imagen: "../images/volkswagen-phideon.jpg",
    descripcion: "Se la banca porque es VW",
    precio: 115000
  }
];

const autos2 = [

  {
    id: "auto04",
    titulo: "Toyota 86 GT-R",
    imagen: "../images/toyota-86.jpg",
    descripcion: "Tecnología Japonesa (Sin más que decir)",
    precio: 150000
  },
  {
    id: "auto05",
    titulo: "Hyundai Génesis G70",
    imagen: "../images/genesis-g70.jpg",
    descripcion: "Terrible",
    precio: 150000
  },
  {
    id: "auto06",
    titulo: "Nissan GT-R",
    imagen: "../images/nissan-gt-r.jpg",
    descripcion: "Otro Japonés para sacarse en sombrero",
    precio: 155000
  },
  {
    id: "auto07",
    titulo: "Porsche 718 Cayman",
    imagen: "../images/Porsche-718-Cayman.jpg",
    descripcion: "Que mas se puede pedir?",
    precio: 194000
  },
  {
    id: "auto08",
    titulo: "Toyota Supra",
    imagen: "../images/toyota-supra.jpg",
    descripcion: "Es TOYOTA y punto",
    precio: 145000
  }
];

let autoAgregado = {    
  id: "auto09",
titulo: "Chevrolet Corvette",
imagen: "../images/chev-corvette.jpg",
descripcion: "El sueño americano",
precio: 210000
};

autos2.push(autoAgregado);

const autosArray = [...autos1 , ...autos2];

const contenedorAutos = document.querySelector("#contenedor-autos");
let botonesAgregarAlCarrito = document.querySelectorAll(".agregar-al-carrito");
let numerosdeCarrito = document.querySelectorAll(".numerito")

// Usamos esta funcion para cargar los elementos en el html desde js - ok
function cargarAutos() {
  autosArray.forEach((auto) => {
    const div = document.createElement("div");
    div.classList.add("auto");
    div.innerHTML = `
      <div class="card">
        <img class="auto-imagen" src="${auto.imagen}" alt="${auto.titulo}">
        <div class="auto-detalles">
          <h2 class="auto-titulo">${auto.titulo}</h2>
          <p class="auto-descripcion">${auto.descripcion}</p>
          <p class="precio">u$$${auto.precio}</p>
          <button class="agregar-al-carrito" data-id="${auto.id}">Agregar al carrito</button>
        </div>
      </div>`;
    contenedorAutos.append(div);
  });
}
cargarAutos();

// Esta funcion me tira errores en cuanto a que ademas de resetearse cuando actualizo la página
// o cambio de página el contador de carrito en el menú no se actualiza mas que en la pagina autos.html
// y parece volver a 0 hasta que presiono nuevamente el botón de agregar al carrito y  vuelve a sumar 
// el ultimo click a los click anteriores - not ok lpm
function agregarAlCarrito(e) {
  const autoId = e.target.getAttribute("data-id");
  const autosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const autoSeleccionado = autosArray.find((auto) => auto.id === autoId);
  if (autoSeleccionado) {
    autosEnCarrito.push(autoSeleccionado);
    localStorage.setItem("carrito", JSON.stringify(autosEnCarrito));
    actualizarNumeritosEnCarrito();
  }
}

// Con esto actualizamos el numero del carrito del menú pero solo se actualiza en la pagina autos.html
const numeritos = document.querySelectorAll(".numerito");
function actualizarNumeritosEnCarrito() {
  numeritos.forEach((numerito) => {
    const autosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    numerito.textContent = autosEnCarrito.length;
    const evento = new Event("carritoActualizado");
    document.dispatchEvent(evento);
    // imprimimos la leyenda con el nº de autos que se agregaron al carrito
    console.log(`Se agregaron ${numerito.textContent} vehiculos al carrito`);
  });
} 



botonesAgregarAlCarrito = document.querySelectorAll(".agregar-al-carrito");
botonesAgregarAlCarrito.forEach((boton) => {
  boton.addEventListener("click", agregarAlCarrito);
});

// para actualizar el numerito de carrito en otras páginas (no encuentro forma) -lpm
document.addEventListener("carritoActualizado", function () {
  const numeritoEnOtraPagina = document.querySelector(".numerito");
  if (numeritoEnOtraPagina) {
    const autosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    numeritoEnOtraPagina.textContent = autosEnCarrito.length;
  }
});

////*********Botón de login - Tampoco salió pero no me tira error*/

const botonInicio = document.getElementById("botonInicio");

const usuarioAutorizado = "jorge";
const passAutorizado = "1234";


botonInicio.addEventListener("click", () => {
Swal.fire({
    title:"Inicio de Sesión",
    html:`
    <input type="text" id="usuario" class="swal2-input" placeholder="Ingresa tu Usuario"> 
    <input type="password" id="password" class="swal2-input" placeholder="Ingresa tu Contraseña"> 
    `,
    confirmButtonText: "Enviar",
    showCancelButtonText: true,
    cancelButtonText: "Cancelar"
}).then((result) => {
  if(result.isConfirmed){
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    if (usuario === usuarioAutorizado && password === passAutorizado){
      window.location.href="./index.html";
  }
}
})

});

// Con esta simple alert de Swal puedo probar que suerte no tengo porque tampoco funciona y no tengo idea de porqué
Swal.fire({
  title:"Estoy meado por una manada de Rinocerontes"
});
