import {renderFile} from "../deps.js";
import * as shoppingListService from "../services/shoppingListService.js";
import * as ingredientService from "../services/ingredientService.js";
import { redirectTo } from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};


const addShoppingList = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  await shoppingListService.create(name);

  return redirectTo("/lists");
};

const viewShoppingLists = async (request) => {
  const data = {
    lists: await shoppingListService.findActiveLists(),
  };

  return new Response(await renderFile("lists.eta", data), responseDetails);
};

const viewShoppingList = async (request) => {
  const url = new URL(request.url);
  const urlParts= url.pathname.split("/");

  const data = {
    list: await shoppingListService.findById(urlParts[2]),
    collectedIngredients: await ingredientService.listCollectedIngredients(urlParts[2]),
    unCollectedIngredients: await ingredientService.listUnCollectedIngredients(urlParts[2]),
  };

  return new Response(await renderFile("shoppinglist.eta", data), responseDetails);
};

const deactivateList = async (request) => {
  const url = new URL (request.url);
  const urlParts = url.pathname.split("/");

  await shoppingListService.deactivateList(urlParts[2]);

  return redirectTo("/lists");


};


export { addShoppingList, viewShoppingLists, viewShoppingList, deactivateList};