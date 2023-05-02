export default function consulta(){

const button = document.getElementById('modulo_consulta_btn');
if (!button) { return; }
const modulo = document.getElementById('modulo_consulta');
if (!modulo) { return; }
const button2 = document.getElementById('modulo_consulta_btn2');
if (!button2) { return; }
const moduloPopin = document.getElementById('modulo_consulta_popin');
if (!moduloPopin) { return; }
const popinContacto = document.getElementById('popinContacto');
if (!popinContacto) { return; }
const popinClose = document.getElementById('Componente_127_10');
if (!popinClose) { return; }
const exito = document.getElementById('modulo_popin_exito');
if (!exito) { return; }
const submit = document.getElementById('modulo_popin_submit');
if (!submit) { return; }
const popinClose2 = document.getElementById('modulo_popin_contacto_exito_close');
if (!popinClose2) { return; }

/*ABRE EL POPIN*/

moduloPopin.addEventListener('click', function(ev){
    popinContacto.classList.add('block');
    modulo.classList.add('none');
})


/*CIERRA EL POPIN*/

popinClose.addEventListener('click', function(ev){
    popinContacto.classList.remove('block');
    modulo.classList.remove('none');
    document.body.classList.remove('no-scroll')

})


/*ESTE ES EL EVENTO CLICK QUE QUIERO APLICAR EN MOBILE*/


        button.addEventListener('click', function(ev){
            if (window.innerWidth < 1024) {
                popinContacto.classList.add('block');
                document.body.classList.add('no-scroll')
            }

        })



        button2.addEventListener('click', function(ev){
            if (window.innerWidth < 1024) {
            modulo.classList.toggle('modulo_consulta_cerrado');
            }
        }) 
    

/*ESTE ES EL EVENTO HOVER QUE QUIERO APLICAR EN DESK*/
    
        modulo.addEventListener('mouseover', function(ev){
            if (window.innerWidth >= 1024) {
                modulo.classList.toggle('modulo_consulta_cerrado');
            }
        })
    
    
    
        modulo.addEventListener('mouseout', function(ev){
            if (window.innerWidth >= 1024) {
                modulo.classList.remove('modulo_consulta_cerrado');
            }
        })
    

/* ABRIR FORMULARIO EXITO*/
    
    submit.addEventListener('click', function(ev){
        exito.classList.add('flex');
    })
    

/* CERRAR FORMULARIO EXITO*/
    
    popinClose2.addEventListener('click', function(ev){
        exito.classList.remove('flex');
        popinContacto.classList.remove('block');
        modulo.classList.add('block');
        document.body.classList.remove('no-scroll')
    })
    

}
