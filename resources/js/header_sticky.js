export default function header(){

    // HEADER STICKY
    const header = document.getElementById('header_sticky');
    if (!header) { return; }
    const auxiliares_sticky = document.getElementById('sticky_idiomas_aux');
    if (!auxiliares_sticky) { return; }
    const contenedor_sticky_idioma = document.getElementById('header_sticky_idiomas_wrp');
    if (!contenedor_sticky_idioma) { return; }
    const flecha = document.getElementById('flecha_principal_idioma');
    if (!flecha) { return; }

    let stickyHeader = function () {
        let y = window.scrollY;
        if (y >= 190) {
            header.classList.add('emerge');
        } else if (y < 190){
            header.classList.remove('emerge');
            auxiliares_sticky.classList.remove('block');
            flecha.classList.remove('grey');
            contenedor_sticky_idioma.classList.remove('header_sticky_background')
        }
    };
    window.addEventListener("scroll", stickyHeader);

}