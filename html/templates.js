/* =========================================
   TEMPLATES HTML DA SPA
========================================= */


/* =========================================
   PÁGINA INICIAL
========================================= */

export function templateInicio() {

    return `
        <section
            data-aos="fade-up"
        >

            <h1>Entrelinhas</h1>

            <p>
                Histórias que transformam,
                páginas que aproximam.
            </p>

            <p>
                A Entrelinhas é uma organização
                dedicada a incentivar o acesso
                à leitura e transformar livros
                em oportunidades de aprendizado,
                imaginação e conexão.
            </p>

            <a
                href="#projetos"
                data-rota="projetos"
            >
                Conheça nossos projetos
            </a>

        </section>


        <section
            data-aos="fade-up"
        >

            <h2>
                Por que a leitura importa?
            </h2>

            <p>
                Ler é descobrir novos mundos,
                conhecer diferentes perspectivas
                e desenvolver a imaginação.
                Acreditamos que o acesso aos
                livros pode contribuir para
                ampliar oportunidades e estimular
                o aprendizado.
            </p>

            <img
                src="/imagens/livros.jpg"
                alt="Livros empilhados representando o incentivo à leitura"
            >

        </section>


        <section
            data-aos="fade-up"
        >

            <h2>
                Faça parte dessa história
            </h2>

            <p>
                Você pode contribuir doando
                livros, participando como
                voluntário ou ajudando nas
                atividades desenvolvidas pela
                Entrelinhas.
            </p>

            <a
                href="#cadastro"
                data-rota="cadastro"
            >
                Quero participar
            </a>

        </section>


        <section
            data-aos="fade-up"
        >

            <h2>
                Entre em contato
            </h2>

            <p>
                Quer saber mais sobre a
                Entrelinhas ou participar
                das nossas iniciativas?
            </p>

            <p>
                E-mail:
                contato@entrelinhas.org.br
            </p>

            <p>
                Telefone:
                (11) 99999-9999
            </p>

        </section>
    `;

}


/* =========================================
   PÁGINA DE PROJETOS
========================================= */

export function templateProjetos() {

    return `
        <section
            data-aos="fade-up"
        >

            <h1>Nossos projetos</h1>

            <p>
                Na Entrelinhas, acreditamos
                que cada história pode abrir
                uma nova possibilidade.
                Por isso, desenvolvemos projetos
                que aproximam pessoas dos livros
                e da leitura.
            </p>


            <div
                class="alerta"
                role="alert"
            >

                <strong>
                    Campanha de arrecadação aberta!
                </strong>

                <p>
                    Estamos recebendo livros em
                    bom estado para ampliar nosso
                    acervo e apoiar nossas
                    iniciativas de leitura.
                </p>

            </div>

        </section>


        <section
            id="biblioteca"
            data-aos="fade-up"
        >

            <span
                class="badge badge-ativo"
            >
                Projeto ativo
            </span>

            <h2>
                Biblioteca Entrelinhas
            </h2>

            <p>
                Criamos espaços de leitura com
                livros arrecadados por meio de
                doações. O objetivo é tornar o
                acesso aos livros mais próximo
                e acessível para diferentes
                comunidades.
            </p>

        </section>


        <section
            id="clube"
            data-aos="fade-up"
        >

            <span
                class="badge badge-clube"
            >
                Clube ativo
            </span>

            <h2>
                Clube de Leitura
            </h2>

            <p>
                O Clube de Leitura reúne pessoas
                interessadas em conhecer novas
                histórias, compartilhar opiniões
                e descobrir diferentes formas
                de enxergar uma obra.
            </p>

        </section>


        <section
            id="doacao"
            data-aos="fade-up"
        >

            <span
                class="badge badge-doacao"
            >
                Arrecadação aberta
            </span>

            <h2>
                Campanha de Doação
            </h2>

            <p>
                Livros em bom estado podem ganhar
                uma nova história. Por meio das
                campanhas de arrecadação, recebemos
                livros que posteriormente são
                destinados aos nossos projetos.
            </p>

            <a
                href="#cadastro"
                data-rota="cadastro"
            >
                Quero fazer uma doação
            </a>

        </section>


        <section
            id="voluntariado"
            data-aos="fade-up"
        >

            <span
                class="badge badge-voluntario"
            >
                Vagas abertas
            </span>

            <h2>
                Programa de Voluntariado
            </h2>

            <p>
                Pessoas voluntárias podem colaborar
                em atividades de leitura,
                organização de livros, eventos
                e ações realizadas pela ONG.
            </p>

            <a
                href="#cadastro"
                data-rota="cadastro"
            >
                Quero ser voluntário
            </a>

        </section>
    `;

}


/* =========================================
   PÁGINA DE CADASTRO
========================================= */

export function templateCadastro() {

    return `
        <section
            data-aos="fade-up"
        >

            <h1>
                Faça parte da Entrelinhas
            </h1>

            <p>
                Preencha o formulário abaixo
                para demonstrar seu interesse
                em participar das nossas
                iniciativas.
            </p>

        </section>


        <form
            id="form-cadastro"
            data-aos="fade-up"
        >

            <fieldset>

                <legend>
                    Dados pessoais
                </legend>


                <label for="nome">
                    Nome completo:
                </label>

                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    autocomplete="name"
                >


                <label for="cpf">
                    CPF:
                </label>

                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="000.000.000-00"
                    required
                    pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                    maxlength="14"
                    inputmode="numeric"
                >


                <label for="email">
                    E-mail:
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seuemail@email.com"
                    required
                    autocomplete="email"
                >


                <label for="nascimento">
                    Data de nascimento:
                </label>

                <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    required
                >

            </fieldset>


            <fieldset>

                <legend>
                    Endereço
                </legend>


                <label for="cep">
                    CEP:
                </label>

                <input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="00000-000"
                    required
                    pattern="[0-9]{5}-[0-9]{3}"
                    maxlength="9"
                    inputmode="numeric"
                >


                <label for="endereco">
                    Endereço:
                </label>

                <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    required
                    autocomplete="street-address"
                >


                <label for="numero">
                    Número:
                </label>

                <input
                    type="number"
                    id="numero"
                    name="numero"
                    min="1"
                    required
                >


                <label for="cidade">
                    Cidade:
                </label>

                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                    autocomplete="address-level2"
                >


                <label for="estado">
                    Estado:
                </label>

                <select
                    id="estado"
                    name="estado"
                    required
                >

                    <option value="">
                        Selecione
                    </option>

                    <option value="SP">
                        São Paulo
                    </option>

                    <option value="RJ">
                        Rio de Janeiro
                    </option>

                    <option value="MG">
                        Minas Gerais
                    </option>

                    <option value="ES">
                        Espírito Santo
                    </option>

                    <option value="PR">
                        Paraná
                    </option>

                    <option value="SC">
                        Santa Catarina
                    </option>

                    <option value="RS">
                        Rio Grande do Sul
                    </option>

                </select>

            </fieldset>


            <fieldset>

                <legend>
                    Contato e participação
                </legend>


                <label for="telefone">
                    Telefone:
                </label>

                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    required
                    pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                    maxlength="15"
                    inputmode="numeric"
                    autocomplete="tel"
                >


                <p>
                    Como você deseja participar?
                </p>


                <input
                    type="radio"
                    id="voluntario"
                    name="participacao"
                    value="voluntario"
                    required
                >

                <label for="voluntario">
                    Voluntariado
                </label>


                <input
                    type="radio"
                    id="doacao"
                    name="participacao"
                    value="doacao"
                >

                <label for="doacao">
                    Doação de livros
                </label>


                <input
                    type="radio"
                    id="eventos"
                    name="participacao"
                    value="eventos"
                >

                <label for="eventos">
                    Participação em eventos
                </label>


                <label for="mensagem">
                    Conte um pouco sobre você:
                </label>

                <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="5"
                    placeholder="Escreva sua mensagem..."
                ></textarea>

            </fieldset>


            <button type="submit">
                Enviar cadastro
            </button>

        </form>


        <div
            class="toast"
            id="toast-sucesso"
            role="status"
            aria-live="polite"
        >

            <div class="toast-icone">
                ✓
            </div>

            <div class="toast-conteudo">

                <strong>
                    Cadastro enviado!
                </strong>

                <p>
                    Obrigado por querer fazer
                    parte da Entrelinhas.
                </p>

            </div>

        </div>
    `;

}


/* =========================================
   PÁGINA DE VOLUNTÁRIOS
========================================= */

export function templateVoluntarios() {

    return `
        <section
            data-aos="fade-up"
        >

            <h1>Voluntários</h1>

            <p>
                Aqui você encontra as pessoas que
                já se inscreveram para fazer parte
                da Entrelinhas. Cada novo voluntário
                representa mais apoio aos nossos
                projetos e nos ajuda a levar a
                leitura, o conhecimento e novas
                histórias para cada vez mais pessoas.
            </p>

        </section>


        <section
            data-aos="fade-up"
        >

            <h2>
                Nossos voluntários
            </h2>

            <div
                id="lista-voluntarios"
                aria-live="polite"
            >

                <p>
                    Carregando voluntários...
                </p>

            </div>

        </section>
    `;

}