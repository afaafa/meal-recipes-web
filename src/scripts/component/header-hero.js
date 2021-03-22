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
                background-position: left;
                background-image: url("${image}");
                background-size: 50%;
                background-repeat: no-repeat;
            }
        </style>

        <div class="hero">
            <div class="text-center ml-72">
                <h1 class="hero_title">Temukan Restoran Terbaikmu.</h1>
                <p class="hero_tagline">Cari restoran dan tempat makan terbaik sesuai kota terdekat dalam satu apps!</p>
            </div>
        </div>
        `
    }

}
customElements.define("header-hero", HeaderHero);