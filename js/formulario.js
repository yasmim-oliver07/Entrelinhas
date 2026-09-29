/* =========================================
   IMPORTAÇÃO DO STORAGE
========================================= */

import {
    salvarCadastro
} from "./storage.js";


/* =========================================
   CONFIGURAÇÃO DO FORMULÁRIO
========================================= */

export function iniciarFormulario() {

    const formulario =
        document.getElementById(
            "form-cadastro"
        );


    if (!formulario) {
        return;
    }


    const cpf =
        document.getElementById(
            "cpf"
        );

    const telefone =
        document.getElementById(
            "telefone"
        );

    const cep =
        document.getElementById(
            "cep"
        );

    const toast =
        document.getElementById(
            "toast-sucesso"
        );


    const campos =
        formulario.querySelectorAll(
            "input, select"
        );


    /* =====================================
       MÁSCARA DO CPF
    ===================================== */

    cpf.addEventListener(
        "input",
        function () {

            let valor =
                cpf.value.replace(
                    /\D/g,
                    ""
                );


            valor =
                valor.substring(
                    0,
                    11
                );


            valor =
                valor.replace(
                    /(\d{3})(\d)/,
                    "$1.$2"
                );


            valor =
                valor.replace(
                    /(\d{3})(\d)/,
                    "$1.$2"
                );


            valor =
                valor.replace(
                    /(\d{3})(\d{1,2})$/,
                    "$1-$2"
                );


            cpf.value =
                valor;

        }
    );


    /* =====================================
       MÁSCARA DO TELEFONE
    ===================================== */

    telefone.addEventListener(
        "input",
        function () {

            let valor =
                telefone.value.replace(
                    /\D/g,
                    ""
                );


            valor =
                valor.substring(
                    0,
                    11
                );


            if (
                valor.length <= 10
            ) {

                valor =
                    valor.replace(
                        /(\d{2})(\d)/,
                        "($1) $2"
                    );


                valor =
                    valor.replace(
                        /(\d{4})(\d)/,
                        "$1-$2"
                    );

            } else {

                valor =
                    valor.replace(
                        /(\d{2})(\d)/,
                        "($1) $2"
                    );


                valor =
                    valor.replace(
                        /(\d{5})(\d)/,
                        "$1-$2"
                    );

            }


            telefone.value =
                valor;

        }
    );


    /* =====================================
       MÁSCARA DO CEP
    ===================================== */

    cep.addEventListener(
        "input",
        function () {

            let valor =
                cep.value.replace(
                    /\D/g,
                    ""
                );


            valor =
                valor.substring(
                    0,
                    8
                );


            valor =
                valor.replace(
                    /(\d{5})(\d)/,
                    "$1-$2"
                );


            cep.value =
                valor;

        }
    );


    /* =====================================
       VALIDAÇÃO EM TEMPO REAL
    ===================================== */

    campos.forEach(
        function (campo) {

            campo.addEventListener(
                "input",
                function () {

                    validarCampo(
                        campo
                    );

                }
            );


            campo.addEventListener(
                "change",
                function () {

                    validarCampo(
                        campo
                    );

                }
            );


            campo.addEventListener(
                "blur",
                function () {

                    validarCampo(
                        campo
                    );

                }
            );

        }
    );


    /* =====================================
       ENVIO DO FORMULÁRIO
    ===================================== */

    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            let formularioValido =
                true;


            campos.forEach(
                function (campo) {

                    const valido =
                        validarCampo(
                            campo
                        );


                    if (!valido) {

                        formularioValido =
                            false;

                    }

                }
            );


            if (
                !formularioValido
                || !formulario.checkValidity()
            ) {

                const primeiroInvalido =
                    formulario.querySelector(
                        ":invalid"
                    );


                if (
                    primeiroInvalido
                ) {

                    primeiroInvalido.focus();

                }


                return;

            }


            /* =================================
               CRIAR OBJETO DO CADASTRO
            ================================= */

            const dadosFormulario =
                new FormData(
                    formulario
                );


            const cadastro =
                Object.fromEntries(
                    dadosFormulario.entries()
                );


            /* =================================
               SALVAR NO LOCALSTORAGE
            ================================= */

            salvarCadastro(
                cadastro
            );


            /* =================================
               FEEDBACK DE SUCESSO
            ================================= */

            mostrarToast(
                toast
            );


            formulario.reset();


            campos.forEach(
                function (campo) {

                    limparEstadoCampo(
                        campo
                    );

                }
            );

        }
    );

}


/* =========================================
   VALIDAR CAMPO
========================================= */

function validarCampo(campo) {

    if (
        campo.type === "radio"
    ) {

        return validarRadio(
            campo
        );

    }


    if (
        campo.checkValidity()
    ) {

        mostrarSucesso(
            campo
        );

        return true;

    }


    const mensagem =
        obterMensagemErro(
            campo
        );


    mostrarErro(
        campo,
        mensagem
    );


    return false;

}


/* =========================================
   MENSAGENS DE ERRO
========================================= */

function obterMensagemErro(campo) {

    if (
        campo.validity.valueMissing
    ) {

        const mensagensObrigatorias = {

            nome:
                "Por favor, informe seu nome completo.",

            cpf:
                "Por favor, informe seu CPF.",

            email:
                "Por favor, informe seu e-mail.",

            nascimento:
                "Por favor, informe sua data de nascimento.",

            cep:
                "Por favor, informe seu CEP.",

            endereco:
                "Por favor, informe seu endereço.",

            numero:
                "Por favor, informe o número do endereço.",

            cidade:
                "Por favor, informe sua cidade.",

            estado:
                "Por favor, selecione um estado.",

            telefone:
                "Por favor, informe seu telefone."

        };


        return (
            mensagensObrigatorias[
                campo.id
            ]
            || "Este campo é obrigatório."
        );

    }


    if (
        campo.validity.typeMismatch
        && campo.type === "email"
    ) {

        return "Digite um endereço de e-mail válido.";

    }


    if (
        campo.validity.patternMismatch
    ) {

        if (
            campo.id === "cpf"
        ) {

            return "Digite o CPF no formato 000.000.000-00.";

        }


        if (
            campo.id === "cep"
        ) {

            return "Digite o CEP no formato 00000-000.";

        }


        if (
            campo.id === "telefone"
        ) {

            return "Digite o telefone no formato (00) 00000-0000.";

        }

    }


    if (
        campo.validity.rangeUnderflow
    ) {

        return "Digite um número maior que zero.";

    }


    return "Verifique o valor informado.";

}


/* =========================================
   EXIBIR ERRO
========================================= */

function mostrarErro(
    campo,
    mensagem
) {

    campo.classList.remove(
        "campo-valido"
    );


    campo.classList.add(
        "campo-invalido"
    );


    let mensagemErro =
        document.getElementById(
            `erro-${campo.id}`
        );


    if (!mensagemErro) {

        mensagemErro =
            document.createElement(
                "small"
            );


        mensagemErro.id =
            `erro-${campo.id}`;


        mensagemErro.className =
            "mensagem-erro";


        campo.insertAdjacentElement(
            "afterend",
            mensagemErro
        );

    }


    mensagemErro.textContent =
        mensagem;


    campo.setAttribute(
        "aria-invalid",
        "true"
    );


    campo.setAttribute(
        "aria-describedby",
        mensagemErro.id
    );

}


/* =========================================
   EXIBIR SUCESSO
========================================= */

function mostrarSucesso(campo) {

    campo.classList.remove(
        "campo-invalido"
    );


    if (
        campo.value.trim() !== ""
    ) {

        campo.classList.add(
            "campo-valido"
        );

    }


    removerMensagemErro(
        campo
    );


    campo.setAttribute(
        "aria-invalid",
        "false"
    );

}


/* =========================================
   VALIDAR RADIO
========================================= */

function validarRadio(campo) {

    const selecionado =
        document.querySelector(
            'input[name="participacao"]:checked'
        );


    const radios =
        document.querySelectorAll(
            'input[name="participacao"]'
        );


    const mensagemAntiga =
        document.getElementById(
            "erro-participacao"
        );


    if (mensagemAntiga) {

        mensagemAntiga.remove();

    }


    if (selecionado) {

        radios.forEach(
            function (radio) {

                radio.setAttribute(
                    "aria-invalid",
                    "false"
                );

            }
        );


        return true;

    }


    const mensagemErro =
        document.createElement(
            "small"
        );


    mensagemErro.id =
        "erro-participacao";


    mensagemErro.className =
        "mensagem-erro mensagem-erro-radio";


    mensagemErro.textContent =
        "Selecione uma forma de participação.";


    const ultimoRadio =
        radios[
            radios.length - 1
        ];


    const ultimoLabel =
        ultimoRadio.nextElementSibling;


    if (ultimoLabel) {

        ultimoLabel.insertAdjacentElement(
            "afterend",
            mensagemErro
        );

    }


    radios.forEach(
        function (radio) {

            radio.setAttribute(
                "aria-invalid",
                "true"
            );

        }
    );


    return false;

}


/* =========================================
   REMOVER MENSAGEM
========================================= */

function removerMensagemErro(campo) {

    const mensagemErro =
        document.getElementById(
            `erro-${campo.id}`
        );


    if (mensagemErro) {

        mensagemErro.remove();

    }


    campo.removeAttribute(
        "aria-describedby"
    );

}


/* =========================================
   LIMPAR ESTADO VISUAL
========================================= */

function limparEstadoCampo(campo) {

    campo.classList.remove(
        "campo-valido",
        "campo-invalido"
    );


    campo.removeAttribute(
        "aria-invalid"
    );


    campo.removeAttribute(
        "aria-describedby"
    );


    removerMensagemErro(
        campo
    );


    const erroParticipacao =
        document.getElementById(
            "erro-participacao"
        );


    if (erroParticipacao) {

        erroParticipacao.remove();

    }

}


/* =========================================
   TOAST
========================================= */

function mostrarToast(toast) {

    if (!toast) {
        return;
    }


    toast.classList.add(
        "mostrar"
    );


    setTimeout(
        function () {

            toast.classList.remove(
                "mostrar"
            );

        },
        5000
    );

}