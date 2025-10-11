import "../../style/Navbar/Navbar.css"
function Navbar() {
    return (
        <>
            <nav class="navbar">
                <div class="navbar-itens">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold mega-menu-item-titulo whitespace-nowrap dark:text-white">Logo</span>
                    </a>
                    <button data-collapse-toggle="mega-menu-full" type="button" class="navbar-btn" aria-controls="mega-menu-full" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto ">
                        <ul class="navbar-list">
                            <li>
                                <a href="/" class="navbar-list-item" aria-current="page">Inicio</a>
                            </li>
                            <li>
                                <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="navbar-item-menu">Mundo <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                            </li>
                            <li>
                                <a href="/biblioteca" class="navbar-list-item">Capitulos</a>
                            </li>
                            <li>
                                <a href="/personagem" class="navbar-list-item">Personagens</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="mega-menu-full-dropdown" class="mega-menu-container hidden">
                    <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                        <ul>
                            <li>
                                <a href="#" class="mega-menu-item">
                                    <div class="font-semibold mega-menu-item-titulo">---</div>
                                    <span class="mega-menu-item-descricao">***Descrição***</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="mega-menu-item">
                                    <div class="font-semibold mega-menu-item-titulo">---</div>
                                    <span class="mega-menu-item-descricao">***Descrição***</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="mega-menu-item">
                                    <div class="font-semibold mega-menu-item-titulo">---</div>
                                    <span class="mega-menu-item-descricao">***Descrição***</span>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#" class="mega-menu-item">
                                    <div class="font-semibold mega-menu-item-titulo">---</div>
                                    <span class="mega-menu-item-descricao">***Descrição***</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="mega-menu-item">
                                    <div class="font-semibold mega-menu-item-titulo">---</div>
                                    <span class="mega-menu-item-descricao">***Descrição***</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="mega-menu-item">
                                    <div class="font-semibold mega-menu-item-titulo">---</div>
                                    <span class="mega-menu-item-descricao">***Descrição***</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar