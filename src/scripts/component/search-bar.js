class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                max-width: 800px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 5px;
                display: flex;
                position: sticky;
                top: 10px;
                margin: 0 auto;
            }
            
            .search-container > input {
                width: 100%;
                padding: 16px;
                border: 0;
                border: 1px solid rgb(229, 231, 235);
                font-weight: normal;
            }
            
            .search-container > input:focus {
                outline: 0;
                border: 2px solid #FBD38D;
            }
            
            .search-container > input:focus::placeholder {
                font-weight: normal;
            }
            
            .search-container >  input::placeholder {
                color: rgb(156, 163, 175);
                font-weight: normal;
            }
            
            .search-container > button {
                width: 50px;
                cursor: pointer;
                margin-left: auto;
                padding: 12px;
                color: white;
                background-color: #f53d2d;
                border: 0;
                text-transform: uppercase;
            }

            
            @media screen and (max-width: 550px){
                .search-container > input {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: auto;
                    border-radius: 3px;
                }
                .search-container >  input::placeholder {
                    font-weight: light;
                }
                .search-container > button {
                    margin-bottom: auto;
                    width: 40px;
                    padding: 7px;
                    border-radius: 3px;
                    margin-left: 6px;
                }

            }
        </style>

        <div id="search-container" class="search-container">
            <input placeholder="Search Meals Recipes" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </button>
        </div>`;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);