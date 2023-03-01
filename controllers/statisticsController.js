import {renderFile} from "../deps.js";
import * as shoppingListService from "../services/shoppingListService.js";
import * as ingredientService from "../services/ingredientService.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};


const showStatistics = async (request) => {
    const data = {
        lists: await shoppingListService.numberOfLists(),
        ingredients: await ingredientService.numberOfIngredients(),
    };
      
    return new Response(await renderFile("statistics.eta", data), responseDetails);
};

export { showStatistics };



