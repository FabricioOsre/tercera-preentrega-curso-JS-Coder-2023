  // ...

// Añadir manejador de eventos a cada botón "Agregar al carrito"
botonesAgregarAlCarrito = document.querySelectorAll(".agregar-al-carrito");
botonesAgregarAlCarrito.forEach((boton) => {
  boton.addEventListener("click", agregarAlCarrito);
});

function agregarAlCarrito(event) {
  // Obtener el ID del auto desde el botón
  const autoId = event.target.id;

  // Obtener el array de autos guardados en el localStorage
  const autosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Buscar el auto en el array de autos
  const autoSeleccionado = autosArray.find((auto) => auto.id === autoId);

  if (autoSeleccionado) {
    // Agregar el auto al array de autos en el carrito
    autosEnCarrito.push(autoSeleccionado);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("carrito", JSON.stringify(autosEnCarrito));

    // Actualizar el número en el carrito (opcional)
    actualizarNumeroEnCarrito(autosEnCarrito.length);
  }
}

function actualizarNumeroEnCarrito(cantidad) {
  const numeritoCarrito = document.querySelector(".numerito");
  if (numeritoCarrito) {
    numeritoCarrito.textContent = cantidad;
  }
}

function mostrarCarrito() {
  const autosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Aquí puedes mostrar los autos en el carrito, por ejemplo, en una lista
  const listaCarrito = document.querySelector("#lista-carrito");
  listaCarrito.innerHTML = "";

  autosEnCarrito.forEach((auto) => {
    const li = document.createElement("li");
    li.textContent = auto.titulo;
    listaCarrito.appendChild(li);
  });
}
//Puedes añadir una función para permitir al usuario limpiar su carrito si lo desea. 
function limpiarCarrito() {
  localStorage.removeItem("carrito");
  // También puedes actualizar la interfaz para reflejar el carrito vacío
  mostrarCarrito();
  actualizarNumeroEnCarrito(0);
}
// ...