/* =========================================
   IMPORTAÇÕES
========================================= */

import {
    iniciarRoteador,
    carregarRotaInicial
} from "./router.js";


import {
    iniciarMenu
} from "./menu.js";


import {
    iniciarFormulario
} from "./formulario.js";


import {
    carregarVoluntarios
} from "./voluntarios.js";


/* =========================================
   INICIALIZAÇÃO DA APLICAÇÃO
========================================= */

function iniciarAplicacao() {

    /*
        Inicializa a biblioteca AOS.
    */

    if (window.AOS) {

        AOS.init({

            duration: 700,

            once: true,

            offset: 40

        });

    }


    iniciarMenu();

    iniciarRoteador();

    carregarRotaInicial();

}


/* =========================================
   CONTEÚDO DINÂMICO DA SPA
========================================= */

document.addEventListener(
    "rotaRenderizada",
    function (event) {

        /*
            Inicializa o formulário
            somente na rota Cadastro.
        */

        if (
            event.detail.rota
            === "cadastro"
        ) {

            iniciarFormulario();

        }


        /*
            Recupera os voluntários
            do localStorage.
        */

        if (
            event.detail.rota
            === "voluntarios"
        ) {

            carregarVoluntarios();

        }


        /*
            Como a SPA acabou de inserir
            novos elementos no DOM,
            atualizamos a biblioteca AOS.
        */

        if (window.AOS) {

            AOS.refreshHard();

        }

    }
);


/* =========================================
   INICIAR SPA
========================================= */

iniciarAplicacao();