function menuburguer(){
    const menu = document.getElementById('menu');

    if (menu.classList.contains('d-none')){
        menu.classList.remove('d-none')
        menu.classList.add('d-block')
    }else{
        menu.classList.remove('d-block')
        menu.classList.add('d-none')
    }
}