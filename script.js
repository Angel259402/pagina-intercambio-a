const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
    }
})


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
}



window.addEventListener('load', () => {
  const ruta = window.location.pathname.toLowerCase();

  if (ruta.includes("intercambio academico nacional.html")) {
    alert("Explora tus opciones de intercambio académico nacional.");
  } else if (ruta.includes("intercambio academico internacional.html")) {
    alert("¡Prepárate para una experiencia internacional con el intercambio académico!");
  } else {
    // Asumimos que es la página principal o cualquier otra sección
    alert("¡Bienvenido a la sección de Intercambio Académico!");
  }
});

