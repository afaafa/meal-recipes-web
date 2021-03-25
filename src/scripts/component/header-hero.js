import image from "../../public/images/cooking.jpg";

class HeaderHero extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <style>
            .hero {
                display: flex;
                align-items: center;
                min-height: 500px;
                width: 100%;
                background-position: center;
                background-image: linear-gradient(rgba(0, 0, 5, 0.5), rgba(0, 0, 5, 0.5)), url("${image}");
                background-size: cover;
                background-repeat: no-repeat;
                padding-top: 50px;
            }
        </style>

        <div class="hero">
            <div class="mx-auto text-white opacity-80 px-2">
                <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl text-center">Healthy recipes that are good for you.</h1>
            </div>
        </div>
        `
    }

}
customElements.define("header-hero", HeaderHero);