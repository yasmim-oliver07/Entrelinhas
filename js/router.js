/* =========================================
   IMPORTAÇÃO DOS TEMPLATES
========================================= */

import {
    templateInicio,
    templateProjetos,
    templateCadastro,
    templateVoluntarios
} from "../html/templates.js";


/* =========================================
   ROTAS DA APLICAÇÃO
========================================= */

const rotas = {

    inicio:
        templateInicio,

    projetos:
        templateProjetos,

    cadastro:
        templateCadastro,

    voluntarios:
        templateVoluntarios

};


/* =========================================
   ELEMENTO PRINCIPAL
========================================= */

const app =
    document.getElementById(
        "app"
    );


/* =========================================
   RENDERIZAÇÃO
========================================= */

export function renderizarRota(
    rota,
    secao = null
) {

    const template =
        rotas[rota]
        || rotas.inicio;


    app.innerHTML =
        template();


    atualizarTitulo(
        rota
    );


    if (secao) {

        setTimeout(
            function () {

                const elemento =
                    document.getElementById(
                        secao
                    );


                if (elemento) {

                    elemento.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            },
            50
        );

    } else {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    document.dispatchEvent(
        new CustomEvent(
            "rotaRenderizada",
            {
                detail: {
                    rota: rota
                }
            }
        )
    );

}


/* =========================================
   NAVEGAÇÃO
========================================= */

export function navegar(
    rota,
    secao = null
) {

    history.pushState(
        {
            rota: rota,
            secao: secao
        },
        "",
        `#${rota}`
    );


    renderizarRota(
        rota,
        secao
    );

}


/* =========================================
   INTERCEPTAÇÃO DOS LINKS
========================================= */

export function iniciarRoteador() {

    document.addEventListener(
        "click",
        function (event) {

            const link =
                event.target.closest(
                    "[data-rota]"
                );


            if (!link) {
                return;
            }


            event.preventDefault();


            const rota =
                link.dataset.rota;


            const secao =
                link.dataset.secao
                || null;


            navegar(
                rota,
                secao
            );

        }
    );


    window.addEventListener(
        "popstate",
        function (event) {

            const estado =
                event.state;


            if (estado) {

                renderizarRota(
                    estado.rota,
                    estado.secao
                );

            } else {

                carregarRotaInicial();

            }

        }
    );

}


/* =========================================
   ROTA INICIAL
========================================= */

export function carregarRotaInicial() {

    const hash =
        window.location.hash.replace(
            "#",
            ""
        );


    const rota =
        rotas[hash]
            ? hash
            : "inicio";


    renderizarRota(
        rota
    );

}


/* =========================================
   TÍTULO DA PÁGINA
========================================= */

function atualizarTitulo(rota) {

    const titulos = {

        inicio:
            "Entrelinhas | ONG de Leitura",

        projetos:
            "Projetos | Entrelinhas",

        cadastro:
            "Participe | Entrelinhas",

        voluntarios:
            "Voluntários | Entrelinhas"

    };


    document.title =
        titulos[rota]
        || titulos.inicio;

}