export default function idiomaSticky(){

const principal_sticky = document.getElementById('sticky_idioma_principal');
if (!principal_sticky) { return; }
const auxiliares_sticky = document.getElementById('sticky_idiomas_aux');
if (!auxiliares_sticky) { return; }
const contenedor_sticky_idioma = document.getElementById('header_sticky_idiomas_wrp');
if (!contenedor_sticky_idioma) { return; }
const flecha = document.getElementById('flecha_principal_idioma');
if (!flecha) { return; }


/* HEADER STICKY */

principal_sticky.addEventListener('click', function(ev){
    auxiliares_sticky.classList.toggle('block');
    contenedor_sticky_idioma.classList.toggle('header_sticky_background')
    flecha.classList.toggle('grey');
    principal_sticky.focus();
})
auxiliares_sticky.addEventListener('click', function(ev){
    auxiliares_sticky.classList.toggle('block');
    contenedor_sticky_idioma.classList.toggle('header_sticky_background')
    flecha.classList.toggle('grey');

})
principal_sticky.addEventListener('focusout', () => {
    auxiliares_sticky.classList.remove('block');
    contenedor_sticky_idioma.classList.remove('header_sticky_background')
    flecha.classList.remove('grey');
});

}
