 function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
};

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < ListaDeTeclas.length) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    //string template
    const idAudio = `#som_${instrumento}`;

    tecla.onclick =  function () {
        tocaSom(idAudio);
    };

    contador = (contador + 1);

    console.log(contador);
    console.log(idAudio);
}