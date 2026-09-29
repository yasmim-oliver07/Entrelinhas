/* =========================================
   ARMAZENAMENTO DE DADOS
========================================= */

/*
    Nome utilizado para identificar
    os dados dentro do localStorage.
*/

const CHAVE_STORAGE =
    "cadastrosEntrelinhas";


/* =========================================
   BUSCAR CADASTROS
========================================= */

export function buscarCadastros() {

    /*
        Busca os dados armazenados
        no navegador.
    */

    const dadosSalvos =
        localStorage.getItem(
            CHAVE_STORAGE
        );


    /*
        Se ainda não existir nenhum
        cadastro, retorna uma lista vazia.
    */

    if (!dadosSalvos) {

        return [];

    }


    /*
        Converte o texto armazenado
        novamente para JavaScript.
    */

    try {

        return JSON.parse(
            dadosSalvos
        );

    } catch (erro) {

        console.error(
            "Erro ao carregar os cadastros:",
            erro
        );

        return [];

    }

}


/* =========================================
   SALVAR CADASTRO
========================================= */

export function salvarCadastro(
    cadastro
) {

    /*
        Recupera os cadastros
        que já estavam armazenados.
    */

    const cadastros =
        buscarCadastros();


    /*
        Adiciona o novo cadastro
        à lista.
    */

    cadastros.push(
        cadastro
    );


    /*
        Converte a lista para texto
        e salva no localStorage.
    */

    localStorage.setItem(
        CHAVE_STORAGE,
        JSON.stringify(
            cadastros
        )
    );

}


/* =========================================
   LIMPAR CADASTROS
========================================= */

export function limparCadastros() {

    localStorage.removeItem(
        CHAVE_STORAGE
    );

}