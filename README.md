# optim_investments
KPI Intelligence Technical Test

## Description

Paris Region wants to have a web application to track the investments it makes for its high schools buildings. 
Draft of a web application to track and manage invesments in high school buildings. 
The application is not deployed. It has to be run locally for now.

### Dataset
The dataset was released under Open Licence by Région Île-de-France: https://www.data.gouv.fr/fr/datasets/operations-de-construction-et-de-renovation-dans-les-lycees-francilens/

## Tech Stack

* Database : MongoDB Atlas
* Backend : NodeJS, Express, Mongoose
* Frontend : Angular, NGX-Admin

## Instructions

### Database

The connection details to the database are temporarily hardcoded.

### Launch the server

Running this application will require that you have <a href=https://nodejs.org/en/> NodeJS  </a> installed on your machine. 
Provided that you have it installed, in your shell, navigate to the backend folder and  run npm install to install the necessary packages for the application.
Then, you can launch the server by executing node server.js. By default, the server is listening on port : 3000.
You can check that the API is retrieving the data from the database at this address http://localhost:3000/api/operations. Additionally you can test the update, post and delete methos using Postman

### Web Application

Similarly, to launch the web application, navigate to the frontend folder, run npm install and then execute ng serve. The application is using the port : 4200.
The application is available at http://localhost:4200/pages/tables/smart-table




