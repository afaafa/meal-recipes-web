import icon from "../../public/images/favicon.png";

class HeaderNavbar extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <style>
            .nav-item > a:hover {
                -webkit-transform: scale(1.08);
                transform: scale(1.08);
                font-weight: bold;
                text-decoration: underline;
                text-decoration-thickness: 5px;
                text-underline-offset: 4px;
                text-decoration-color: #FBD38D;
            }
        </style>

        <nav class="flex fixed mt-0 w-full p-4 bg-white opacity-90 shadow-md z-10">
            <a class="w-3/12 flex text-3xl" href="#">
                <img src="${icon}" alt="icon logo" class="w-14">
                <p class="pt-2 font-bold text-gray-700">CookApp</p>
            </a>
            <button type="button" class="bg-white mt-2 rounded-md absolute right-4 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden">
                <span class="sr-only">open main menu</span>
                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div class="hidden md:flex md:w-9/12 md:justify-between md:pt-4 text-gray-700">
                <ul class="md:flex">
                    <li class="px-4 nav-item"><a href="#recipes">Recipes</a></li>
                    <li class="px-4 nav-item"><a href="#stories">Stories</a></li>
                    <li class="px-4 nav-item"><a href="#categories">Categories</a></li>
                </ul>
                <div>
                    <button class="btn">Login</button>
                    <button class="btn">Sign-up</button>
                </div>
            </div>
      </nav>
    `
    }
}

customElements.define("header-navbar", HeaderNavbar);