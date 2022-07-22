 function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
};

const ListaDeTeclas = document.querySelectorAll('.tecla');

ListaDeTeclas[0].onclick = tocaSomPom;