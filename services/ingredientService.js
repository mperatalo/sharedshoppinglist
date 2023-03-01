import { sql } from "../database/database.js";

const addIngredient = async (listId, name) => {
  await sql`INSERT INTO
    shopping_list_items (shopping_list_id, name)
    VALUES (${listId}, ${name})`;
};


const collectIngredient = async (id) => {
  await sql`UPDATE shopping_list_items
    SET collected = true WHERE id = ${ id }`;
};

const listCollectedIngredients = async (listId) => {
    return await sql `SELECT * FROM shopping_list_items WHERE collected = true AND shopping_list_id = ${listId} ORDER BY name ASC`;
};

const listUnCollectedIngredients = async (listId) => {
    return await sql `SELECT * FROM shopping_list_items WHERE collected = false AND shopping_list_id = ${listId} ORDER BY name ASC`;
};

const numberOfIngredients = async () => {
  const rows = await sql `SELECT COUNT (*) FROM shopping_list_items`;
  return rows[0].count;
};


export {numberOfIngredients, addIngredient, collectIngredient, listCollectedIngredients, listUnCollectedIngredients };