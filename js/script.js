
function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000); // vezes mil milissegundos
    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "GMT",  // poderia ser: UTC
    })
}

// Selecionando:

const relogio = document.querySelector(".relogio");

let segundos = 0;
let timer;

// função para inciar

function iniciarReloigio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}


document.addEventListener("click", function (e) {
    const elemento = e.target;

    if (elemento.classList.contains("iniciar")) {
        clearInterval(timer);
        iniciarReloigio();
    }

    if (elemento.classList.contains("pausar")) {
        relogio.classList.add('pausado');
        clearInterval(timer);  // pra pausar    
    }

    if (elemento.classList.contains("zerar")) {
        relogio.classList.remove("pausado");
        clearInterval(timer);
        relogio.innerHTML = "00:00:00";
        segundos = 0;
    }

})

