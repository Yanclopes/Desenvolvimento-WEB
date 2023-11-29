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

document.addEventListener("DOMContentLoaded", function () {
    var indice = 1;
    const imagem1 = document.getElementById('foto1');
    const imagem2 = document.getElementById('foto2');

    function carrossel() {
        if (indice % 2 === 0) {
            imagem1.classList.add('d-none');
            imagem2.classList.remove('d-none');
        } else {
            imagem1.classList.remove('d-none');
            imagem2.classList.add('d-none');
        }

        indice++;
        setTimeout(carrossel, 2000);
    }

    setTimeout(carrossel, 2000);
});

let galeriaIndice = 1;

    function mudarItem(n) {
        showItem(galeriaIndice += n);
    }

    function showItem(n) {
        let Items = document.querySelectorAll('.galeria-item');
        if (n > Items.length) {
            galeriaIndice = 1;
        }
        if (n < 1) {
            galeriaIndice = Items.length;
        }
        for (let i = 0; i < Items.length; i++) {
            Items[i].classList.remove('ativo');
        }
        Items[galeriaIndice - 1].classList.add('ativo');
    }