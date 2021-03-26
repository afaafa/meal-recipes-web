import "../component/meal-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");
    const loaderElement = document.querySelector("#loader-text");

    const onButtonSearchClicked = () => {
        DataSource.searchMeal(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const searchMeal = async (keyword) => {
        loaderElement.style.display = 'block';

        try {
            const result = await DataSource.searchMeal(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = results => {
        mealListElement.clubs = results;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    searchMeal('');

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;