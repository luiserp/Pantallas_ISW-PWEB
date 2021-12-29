// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

var cont_principal = document.querySelector('form div');
var contenedores_estudiante = document.querySelectorAll('.estudiante');
var contenedores_profesor = document.querySelectorAll('.profesor');
var contenedores_administrador = document.querySelectorAll('.administrador');

document.getElementById('rol').addEventListener('change', function(e){
  let val = e.target.value;

  if(val == "1"){
    contenedores_estudiante.forEach( i =>  { cont_principal.appendChild(i); i.style.display="flex"; } );
    contenedores_profesor.forEach( i =>  {try{cont_principal.removeChild(i)} catch{}} )
    contenedores_administrador.forEach( i => {try{cont_principal.removeChild(i)} catch{}} )
  }
  if(val == "2"){
    contenedores_profesor.forEach( i => { cont_principal.appendChild(i); i.style.display="flex"; } );
    contenedores_estudiante.forEach( i => {try{cont_principal.removeChild(i)} catch{}} )
    contenedores_administrador.forEach( i => {try{cont_principal.removeChild(i)} catch{}} )
  }
  if(val == "3"){
    contenedores_administrador.forEach( i => { cont_principal.appendChild(i); i.style.display="flex"; } )
    contenedores_profesor.forEach( i => {try{cont_principal.removeChild(i)} catch{}} )
    contenedores_estudiante.forEach( i => {try{cont_principal.removeChild(i)} catch{}} )
  }

});

// var contenedores_estudiante = document.querySelectorAll('.estudiante');
// var contenedores_profesor = document.querySelectorAll('.profesor');
// var contenedores_administrador = document.querySelectorAll('.administrador');

// document.getElementById('rol').addEventListener('change', function(e){
//   let val = e.target.value;
//   if(val == "1"){
//     contenedores_estudiante.forEach( i => i.style.display = "flex" )
//     contenedores_profesor.forEach( i => i.style.display = "none" )
//     contenedores_administrador.forEach( i => i.style.display = "none" )
//   }else if(val == "2"){
//     contenedores_estudiante.forEach( i => i.style.display = "none" )
//     contenedores_profesor.forEach( i => i.style.display = "flex" )
//     contenedores_administrador.forEach( i => i.style.display = "none" )
//   }else {
//     contenedores_estudiante.forEach( i => i.style.display = "none" )
//     contenedores_profesor.forEach( i => i.style.display = "none" )
//     contenedores_administrador.forEach( i => i.style.display = "flex" )
//   }
// });


// VALIDACION PERSONALIZADA
document.querySelector('form').addEventListener('submit', function(e){
  let pass = document.querySelector('#contrasenna');
  let re_pass = document.querySelector('#rep_contrasenna');

  if(pass.value != re_pass.value){
    pass.setCustomValidity("Las contraseñas no coinciden.")
    pass.parentElement.querySelector('.invalid-feedback').innerHTML = pass.validationMessage
    e.preventDefault();
    e.stopPropagation();
  }

});