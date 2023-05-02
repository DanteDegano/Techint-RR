export default function newsLatter(){

const suscribirse = document.getElementById('suscribirse');
if (!suscribirse) { return; }
const gracias = document.getElementById('gracias');
if (!gracias) { return; }
const contenido = document.getElementById('modulo_novedades_wrp_suscribite');
if (!contenido) { return; }

suscribirse.addEventListener('click', function(ev){
    gracias.classList.add('flex');
    contenido.classList.add('none');
})

}