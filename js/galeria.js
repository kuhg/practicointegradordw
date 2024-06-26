async function obtenerDatos(){
    const response = await fetch("../js/datos.json");
    const json = await response.json();
    json.datos.forEach(element => {
        casas.push(element);
    });
    console.log(casas);
}
var casas=[];
obtenerDatos();
function cargarTodo(){
    var modeloCarta='<div class="row">';
    console.log(casas);

    casas.forEach(element=>{
        modeloCarta=modeloCarta+'<div id="foto" class="col-lg-4 col-md-6 col-sm-12" ><div class="card">';
        modeloCarta=modeloCarta+ '<img src='+"\""+element.direccion+"\""+'class="card-img-top">';
        modeloCarta=modeloCarta+'<div class="card-body">';
        modeloCarta=modeloCarta+'<p class="card-text">Construdia en el año: '+element.año+'</p>';
        modeloCarta=modeloCarta+'<p class="card-text">Localidad: '+element.ubicacion+'</p>';
        modeloCarta=modeloCarta+'<p class="card-text">Habitaciones: '+element.habitaciones+'</p>';
        modeloCarta=modeloCarta+'<p class="card-text">Plantas: '+element.plantas+'</p>';
        modeloCarta=modeloCarta+'<p class="card-text">Tipo: '+element.tipo+'</p>';
        modeloCarta=modeloCarta+'</div></div></div>';
    });
    
    modeloCarta=modeloCarta+'</div>';
    document.getElementById('fotos').innerHTML=modeloCarta;
}

function filtrar(){
    var condicionTipo = document.getElementById('filtroTipo').value;
    var condicionHabitaciones=document.getElementById('filtroHabitaciones').value;
    var modeloCarta='<div class="row">';
    casas.forEach(element=>{

        if((condicionHabitaciones=="todas")&&(condicionTipo=="todas")){
                modeloCarta=modeloCarta+'<div id="foto" class="col-lg-4 col-md-6 col-sm-12" ><div class="card">';
                modeloCarta=modeloCarta+ '<img src='+"\""+element.direccion+"\""+'class="card-img-top">';
                modeloCarta=modeloCarta+'<div class="card-body">';
                modeloCarta=modeloCarta+'<p class="card-text">Construdia en el año: '+element.año+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Localidad: '+element.ubicacion+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Habitaciones: '+element.habitaciones+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Plantas: '+element.plantas+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Tipo: '+element.tipo+'</p>';
                modeloCarta=modeloCarta+'</div></div></div>';
            
        }


        if((condicionTipo!="todas")&&(condicionHabitaciones!="todas")){
            if((condicionTipo==element.tipo)&&(condicionHabitaciones==element.habitaciones)){
                modeloCarta=modeloCarta+'<div id="foto" class="col-lg-4 col-md-6 col-sm-12" ><div class="card">';
                modeloCarta=modeloCarta+ '<img src='+"\""+element.direccion+"\""+'class="card-img-top">';
                modeloCarta=modeloCarta+'<div class="card-body">';
                modeloCarta=modeloCarta+'<p class="card-text">Construdia en el año: '+element.año+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Localidad: '+element.ubicacion+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Habitaciones: '+element.habitaciones+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Plantas: '+element.plantas+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Tipo: '+element.tipo+'</p>';
                modeloCarta=modeloCarta+'</div></div></div>';
            }
        }

        if((condicionTipo=="todas")&&(condicionHabitaciones!="todas")){
            if((condicionHabitaciones==element.habitaciones)){
                modeloCarta=modeloCarta+'<div id="foto" class="col-lg-4 col-md-6 col-sm-12" ><div class="card">';
                modeloCarta=modeloCarta+ '<img src='+"\""+element.direccion+"\""+'class="card-img-top">';
                modeloCarta=modeloCarta+'<div class="card-body">';
                modeloCarta=modeloCarta+'<p class="card-text">Construdia en el año: '+element.año+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Localidad: '+element.ubicacion+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Habitaciones: '+element.habitaciones+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Plantas: '+element.plantas+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Tipo: '+element.tipo+'</p>';
                modeloCarta=modeloCarta+'</div></div></div>';
            }
        }
        if((condicionTipo!="todas")&&(condicionHabitaciones=="todas")){
            if((condicionTipo==element.tipo)){
                modeloCarta=modeloCarta+'<div id="foto" class="col-lg-4 col-md-6 col-sm-12" ><div class="card">';
                modeloCarta=modeloCarta+ '<img src='+"\""+element.direccion+"\""+'class="card-img-top">';
                modeloCarta=modeloCarta+'<div class="card-body">';
                modeloCarta=modeloCarta+'<p class="card-text">Construdia en el año: '+element.año+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Localidad: '+element.ubicacion+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Habitaciones: '+element.habitaciones+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Plantas: '+element.plantas+'</p>';
                modeloCarta=modeloCarta+'<p class="card-text">Tipo: '+element.tipo+'</p>';
                modeloCarta=modeloCarta+'</div></div></div>';
            }
        }
    });

    modeloCarta=modeloCarta+'</div>'
    document.getElementById('fotos').innerHTML=modeloCarta;
    if(modeloCarta=='<div class="row"></div>'){
        document.getElementById('fotos').innerHTML='<p align="center">No se encontraron resultados para su búsqueda. Por favor, revise los filtros aplicados e intente con otras Opciones.</p>'
    }

}