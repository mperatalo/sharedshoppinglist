# Project 1: Shared shopping list

The shared shopping list web application consists of four main functionalities: controllers, services, database and views. It is constructed under folder shopping-lists. The application uses layered and three-tier architecture.

The folder controllers includes files ingredientController, listController and statisticsController. The file ingredientController consists of two functions which are used to add and collect ingredients from the shopping list. The listController is used to add new shopping lists, to show all shopping lists as well as individual shopping lists. It is also used to deactivate shopping lists. The statisticsController consist of one function showStatistics which is used to show to statistics about shopping lists and their ingredients at the main page.

The folder services consists of two files: ingredientService and shoppingListService. The ingredientService is used to interact with database shopping_list_items table which includes the ingredients for the shopping lists. The shoppingListService interacts with the database called shopping_lists which consists of the individual shopping lists.

The folder views is used to show the data and web page for the end user at html format. It consists of altogether four files. The file layout.eta put under the folder layouts is used to style the pages. File lists.eta shows the page "/lists", file shoppinglist.eta pages "/lists/{file id}" for individual shopping lists. File statistics.eta shows statistics at main page "/".

The application is launced via app.js. The dependencies are collected to file deps.js. Frequently used functionalities for serving the web page are constructed under folder utils to file requestUtils.js. It consist of function redirectTo used as part of the POST/Redirect/GET -pattern.  

The application uses PostgresSQL database and flyway to keep up with the changes to the database. The SQL-file for initiating the database is located under the folder flyway/sql. The automated tests are constructed with playwright.The application uses Docker and Docker compose for containerization and running.



The application can be launched and tested locally with Docker Compose by typing the command "docker compose up" (with older docker compose versions: "docker-compose up") and then accessing the site http://localhost:7777/

Link to the online web application (via Render)

https://sharedshoppinglist.onrender.com/ 


