import "./meal-item.js";

class MealList extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }

    renderError(message){
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                margin: 0 auto;
                text-align: center;
            }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`; 
    }

    render(){
        this.shadowDOM.innerHTML = "";
        this._clubs.forEach(club => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.club = club
            this.shadowDOM.appendChild(mealItemElement);
        })
    }
}

customElements.define("meal-list", MealList);