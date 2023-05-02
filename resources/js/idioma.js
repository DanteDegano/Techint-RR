export default function idioma(){

    const principal = document.getElementById('idioma_principal');
    if (!principal) { return; }
    const auxiliares = document.getElementById('idiomas_aux');
    if (!auxiliares) { return; }
    const contenedor_idioma = document.getElementById('header_idiomas_wrp');
    if (!contenedor_idioma) { return; }
    const primero = document.getElementById('primer_idioma');
    if (!primero) { return; }
    const flecha_idioma = document.getElementById('flecha_header_idioma');
    if (!flecha_idioma) { return; }


    /* HEADER*/

    principal.addEventListener('click', function(ev){
        auxiliares.classList.toggle('block');
        contenedor_idioma.classList.toggle('header_sticky_background');
        primero.classList.toggle('black');
        flecha_idioma.classList.toggle('grey');
        principal.focus();
    })
    auxiliares.addEventListener('click', function(ev){
        auxiliares.classList.toggle('block');
        contenedor_idioma.classList.toggle('header_sticky_background');
        primero.classList.toggle('black');
        flecha_idioma.classList.toggle('grey');
    })
    principal.addEventListener('focusout', () => {
        auxiliares.classList.remove('block');
        contenedor_idioma.classList.remove('header_sticky_background');
        primero.classList.remove('black');
        flecha_idioma.classList.toggle('grey');
    });


}