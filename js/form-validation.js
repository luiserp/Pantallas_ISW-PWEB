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
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
})()


var html_estudiante = [`<label for="anno" class="col-sm-4 col-form-label">Año que cursa:</label>
                        <div class="col-sm-8">
                            <select id="anno" class="form-select" required>
                                <option disabled selected value="">Seleccionar...</option>
                                <option value="1">1ro</option>
                                <option value="2">2do</option>
                                <option value="3">3ro</option>
                                <option value="3">4to</option>
                                <option value="3">5to</option>
                            </select>
                            <div class="invalid-feedback">
                                Debe indicar el año del estudiante.
                            </div>
                        </div>`];
                        
var html_profesor = [`<label for="asignatura" class="col-sm-4 col-form-label">Asignaura:</label>
                              <div class="col-sm-8">
                                  <select id="asignatura" class="form-select" required>
                                      <option disabled selected value="">Seleccionar...</option>
                                      <option value="1">Asignatura 1</option>
                                      <option value="2">Asignatura 2</option>
                                      <option value="3">Asignatura 3</option>
                                      <option value="3">Asignatura 4</option>
                                      <option value="3">Asignatura 5</option>
                                  </select>
                                  <div class="invalid-feedback">
                                      Seleccione la asignatura que imparte el profesor.
                                  </div>
                              </div>`,
                              `<label for="categoria" class="col-sm-4 col-form-label">Categoria docente:</label>
                              <div class="col-sm-8">
                                <input type="text" class="form-control" id="categoria" placeholder="Ingeniero, Master o Doctor" required>
                                <div class="invalid-feedback">
                                    Debe escribir la categoria docente del profesor.
                                </div>
                              </div>`];

var html_administrador = [`<label for="telefono" class="col-sm-4 col-form-label">Telefono de emergencias:</label>
                                  <div class="col-sm-8">
                                    <input type="number" class="form-control" id="telefono" placeholder="+53 xxxxxxxx" required>
                                    <div class="invalid-feedback">
                                        Debe escribir un telefono de emergencias.
                                    </div>
                                  </div>`,
                                `<label for="centro" class="col-sm-4 col-form-label">Centro:</label>
                                <div class="col-sm-8">
                                  <input type="text" class="form-control" id="centro" placeholder="Centro donde radica" required>
                                  <div class="invalid-feedback">
                                      Debe escribir el centro donde radica el administrador.
                                  </div>
                                </div>`];

document.getElementById('rol').addEventListener('change', function(e){
  let val = e.target.value;
  if(val == "1"){
    contenedores_estudiante.forEach( i => i.style.display = "flex" )
    contenedores_profesor.forEach( i => i.style.display = "none" )
    contenedores_administrador.forEach( i => i.style.display = "none" )
  }else if(val == "2"){
    contenedores_estudiante.forEach( i => i.style.display = "none" )
    contenedores_profesor.forEach( i => i.style.display = "flex" )
    contenedores_administrador.forEach( i => i.style.display = "none" )
  }else {
    contenedores_estudiante.forEach( i => i.style.display = "none" )
    contenedores_profesor.forEach( i => i.style.display = "none" )
    contenedores_administrador.forEach( i => i.style.display = "flex" )
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