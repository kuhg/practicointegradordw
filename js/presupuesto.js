const expresiones={
    numero:/^\d{1,3}$/
}
const condicion={
    condNum:false
}

function calcularPresupuesto(){
    var tipo =document.getElementById('tipo').value;
    var metros = document.getElementById('metrosConstruccion').value;
    var monto=0;

    if(expresiones.numero.test(metros)){
        condicion.condNum=true;
    }else{
        false
    }
    
    if(condicion.condNum==true){
        switch(tipo){
            case 'Reboque Fino':
                monto=15755;
                break;
            case 'Reboque Grueso':
                monto = 21082;
                break
            case 'Contrapiso':
                monto=20768;
                break;
            case 'Manposteria de ladrillo 18':
                monto=20768;
                break;
            case 'Manposteria de ladrillo maziso':
                monto=12316;
                break;
            case 'Carpeta':
                monto=19286;
                break;
            case 'Cimientos':
                monto = 26179;
                break;
            case 'Colocacion pizo ceramico':
                monto = 25072;
                break;
            case 'Colocacion piedra laja':
                monto = 19052;
                break;
            case 'Colocacion piso flotante':
                monto = 40832;
                break;
        }
        var mensaje= '<p>'+'El monto aproximado es de:<strong> '+monto * metros+'</strong></p>';
        document.getElementById('presupuestoMensaje').innerHTML=mensaje;
    }else{
        var mensajeError='<p>Los metros ingresados son incorrectos solo de 1 hasta 3 digitos</p>';
        document.getElementById('presupuestoMensaje').innerHTML=mensajeError;
    }
}