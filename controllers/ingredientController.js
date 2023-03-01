import * as ingredientService from "../services/ingredientService.js";
import { redirectTo } from "../utils/requestUtils.js";

const addIngredient = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");

    const formData = await request.formData();
    const name = formData.get("name");

    await ingredientService.addIngredient(urlParts[2], name);

    return redirectTo(`/lists/${urlParts[2]}`);
};

const collectIngredient = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");

    await ingredientService.collectIngredient(urlParts[4]);

    return redirectTo(`/lists/${urlParts[2]}`);

};

export {addIngredient, collectIngredient};
