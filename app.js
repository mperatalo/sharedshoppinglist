import { serve, configure } from "./deps.js";
import * as shoppingListController from "./controllers/listController.js";
import * as ingredientController from "./controllers/ingredientController.js";
import * as statisticsController from "./controllers/statisticsController.js";
import { redirectTo } from "./utils/requestUtils.js";

configure({
  views: `${Deno.cwd()}/views/`,
});


const handleRequest = async (request) => {
  const url = new URL(request.url);

  if (url.pathname.match("/lists/[0-9]+/items/[0-9]+/collect") && request.method === "POST") {
    return await ingredientController.collectIngredient(request);
  } else if (url.pathname.match("/lists/[0-9]+/items") && request.method === "POST") {
    return await ingredientController.addIngredient(request);
  } else if (url.pathname.match("/lists/[0-9]+/deactivate") && request.method === "POST") {
    return await shoppingListController.deactivateList(request);
  } else if (url.pathname.match("lists/[0-9]+") && request.method === "GET") {
    return await shoppingListController.viewShoppingList(request);
  } else if (url.pathname === "/lists" && request.method === "GET") {
    return await shoppingListController.viewShoppingLists(request);
  } else if (url.pathname === "/lists" && request.method === "POST") {
    return await shoppingListController.addShoppingList(request);
  } else if (url.pathname === "/" && request.method === "GET") {
    return await statisticsController.showStatistics(request);
  } else {
    return await redirectTo("/");
  }
};

serve(handleRequest, { port: 7777 });
