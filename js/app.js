


// Elementos input con información de libro Nuevo
const autor = document.getElementById('inputAutor')
const titulo = document.getElementById('inputTitulo')
const tabla = document.getElementById('tbody')

const patern = /^[a-zA-Z0-9]{3,20}$/;
/^[a-zA-ZÁ-ÿ0-9\s]{3,20}$/;

const libro = new Libro()

EventListener()


function EventListener(){
    document.getElementById('btnAdd').addEventListener('click', PrepararLibro)
    tabla.addEventListener('click', Acciones)
}


function PrepararLibro(){

   
    if((autor.value != '' || titulo.value != '') && (patern.test(autor.value) || patern.test(titulo.value))){
        //libro.agregar()
        let tr = libro.agregar([autor.value, titulo.value])
        console.log(tr);
        tabla.appendChild(tr)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se agregó libro',
            showConfirmButton: false,
            timer: 1000
          })
          autor.value = ''
          titulo.value = ''
      
    }else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error',
            showConfirmButton: false,
            timer: 1000
          })
    }
    
}

function Acciones(){
    //console.log(event.target.tagName);
    if(event.target.tagName === 'I' || event.target.tagName === 'BUTTON'){
        
        // libro.eliminar(event.target.tagName)
       
        // Filtrar botones editar y eliminar
        if(event.target.className.includes('btn-outline-danger') || event.target.className.includes('fa-trash')){
            console.log('eliminado')
            libro.eliminar(event.target)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se eliminó el libro',
                showConfirmButton: false,
                timer: 1000
              })
        }
    }
}