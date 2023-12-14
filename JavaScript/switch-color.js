// Conversion de color de la página entre  dark y ligth mode
// creacion de un div en la barra de menu de boostrap con el selector de color
document.addEventListener('DOMContentLoaded', function () {
    const SwitchDeColor = document.getElementById('SwitchDeColor');
  
    // con esto verificamos el estado actual del modo oscuro
    const DarkMode = localStorage.getItem('darkMode') === 'enabled';
  
    // Acá llamamos a la funcion para aplicar el el dark mode
    if (DarkMode) {
      activarDarkMode();
    }
  
    // Usamos if else para llamar a las funciones que realizan los cambios de color
    SwitchDeColor.addEventListener('change', function () {
      if (SwitchDeColor.checked) {
        activarDarkMode();
      } else {
        activarLigthMode();
        }
    });
  
    // Funcion para habilitar el modo oscuro
    function activarDarkMode() {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
      SwitchDeColor.nextElementSibling.textContent = 'Light Mode';
    }
  

    // Función para deshabilitar el modo oscuro
    function activarLigthMode() {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', null);
      SwitchDeColor.nextElementSibling.textContent = 'Dark Mode';
    }
  });

////*********Botón de login - Para ingresar a la pagina de autos*/

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
