/* =========================================
   MENU RESPONSIVO
========================================= */

export function iniciarMenu() {

    const menuToggle =
        document.querySelector(
            ".menu-toggle"
        );

    const menu =
        document.querySelector(
            ".menu"
        );


    if (!menuToggle || !menu) {
        return;
    }


    /* =====================================
       ABRIR E FECHAR MENU
    ===================================== */

    menuToggle.addEventListener(
        "click",
        function () {

            menu.classList.toggle(
                "ativo"
            );


            const menuAberto =
                menu.classList.contains(
                    "ativo"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                menuAberto
            );


            menuToggle.setAttribute(
                "aria-label",
                menuAberto
                    ? "Fechar menu"
                    : "Abrir menu"
            );

        }
    );


    /* =====================================
       FECHAR APÓS NAVEGAÇÃO
    ===================================== */

    document.addEventListener(
        "click",
        function (event) {

            const link =
                event.target.closest(
                    ".menu a"
                );


            if (
                !link
                || window.innerWidth > 767
            ) {
                return;
            }


            menu.classList.remove(
                "ativo"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }
    );

}