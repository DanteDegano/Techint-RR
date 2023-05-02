export default function menu(){
    //SCRIPT MENU
    
    const hamburguesa = document.getElementById('hamburguesa');
    if (!hamburguesa) { return; }
    const hamburguesa2 = document.getElementById('hamburguesa2');
    
    const menu = document.getElementById('menu');
    if (!menu) { return; }
    const close = document.getElementById('close');
    if (!close) { return; }
    const close2 = document.getElementById('close2');
    if (!close2) { return; }
    const primerboton = document.getElementById('primerboton');
    if (!primerboton) { return; }
    const primersubmenu = document.getElementById('primersubmenu');
    if (!primersubmenu) { return; }
    const segundoboton = document.getElementById('segundoboton');
    if (!segundoboton) { return; }
    const segundosubmenu = document.getElementById('segundosubmenu');
    if (!segundosubmenu) { return; }
    const primeraflecha = document.getElementById('primeraflecha');
    if (!primeraflecha) { return; }
    const segundaflecha = document.getElementById('segundaflecha');
    if (!segundaflecha) { return; }

    hamburguesa.addEventListener('click', function(ev){
        menu.classList.toggle('opened');
        document.body.classList.toggle('no-scroll');
    })

    close.addEventListener('click', function(ev){
        menu.classList.toggle('opened')
        document.body.classList.remove('no-scroll');
    })
    
    close2.addEventListener('click', function(ev){
        menu.classList.toggle('opened')
        document.body.classList.remove('no-scroll');
    })

    if (hamburguesa2) {
        hamburguesa2.addEventListener('click', function(ev){
            menu.classList.toggle('opened');
            document.body.classList.toggle('no-scroll');
        })
    }


    //END SCRIPT MENU

    //SCRIPT SUBMENU

    primerboton.addEventListener('click', function(ev){
        primersubmenu.classList.toggle('none');
        primeraflecha.classList.toggle('rotate180');
        primerboton.classList.toggle('hover');

    })

    segundoboton.addEventListener('click', function(ev){
        segundosubmenu.classList.toggle('none');
        segundaflecha.classList.toggle('rotate180');
        segundoboton.classList.toggle('hover');
    })


    // END SCRIPT SUBMENU
}
