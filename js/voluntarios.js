/* =========================================
   IMPORTAÇÃO DO STORAGE
========================================= */

import {
    buscarCadastros
} from "./storage.js";


/* =========================================
   CARREGAR VOLUNTÁRIOS
========================================= */

export function carregarVoluntarios() {

    const lista =
        document.getElementById(
            "lista-voluntarios"
        );


    if (!lista) {
        return;
    }


    /*
        Recupera os cadastros armazenados
        no localStorage.
    */

    const cadastros =
        buscarCadastros();


    /*
        Mantém apenas as pessoas que
        escolheram Voluntariado.
    */

    const voluntarios =
        cadastros.filter(
            function (cadastro) {

                return (
                    cadastro.participacao
                    === "voluntario"
                );

            }
        );


    /*
        Caso ainda não exista
        nenhum voluntário cadastrado.
    */

    if (
        voluntarios.length === 0
    ) {

        lista.innerHTML = `
            <div class="aviso-sem-voluntarios">

                <p>
                    Ainda não há voluntários
                    inscritos. Seja a primeira
                    pessoa a fazer parte dessa
                    história!
                </p>

                <a
                    href="#cadastro"
                    data-rota="cadastro"
                >
                    Quero ser voluntário
                </a>

            </div>
        `;

        return;

    }


    /*
        Cada cadastro é transformado
        em um card.
    */

    const componentes =
        voluntarios.map(
            function (
                voluntario,
                indice
            ) {

                const mensagem =
                    voluntario.mensagem
                        ? voluntario.mensagem
                        : "Nenhuma mensagem informada.";


                return `
                    <article
                        class="card-voluntario"
                    >

                        <span
                            class="badge badge-voluntario"
                        >
                            Voluntário ${indice + 1}
                        </span>


                        <h3>
                            ${escaparHTML(
                                voluntario.nome
                            )}
                        </h3>


                        <p>
                            <strong>
                                Participação:
                            </strong>

                            Voluntariado
                        </p>


                        <p>
                            <strong>
                                Telefone para contato:
                            </strong>

                            ${escaparHTML(
                                voluntario.telefone
                            )}
                        </p>


                        <p>
                            <strong>
                                Mensagem:
                            </strong>

                            ${escaparHTML(
                                mensagem
                            )}
                        </p>

                    </article>
                `;

            }
        );


    /*
        Insere todos os cards
        dentro da página.
    */

    lista.innerHTML =
        componentes.join("");

}


/* =========================================
   PROTEÇÃO DO CONTEÚDO
========================================= */

function escaparHTML(valor) {

    const elemento =
        document.createElement(
            "div"
        );


    elemento.textContent =
        valor || "";


    return elemento.innerHTML;

}