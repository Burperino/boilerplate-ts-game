const express = require('express');
const config = require('./config.json');

//Initialize the express app (server)
//We will be using ejs for this
const app = express();

//Set the view engine to ejs
app.set('view engine', 'ejs');

/*
    Add the functionality of the the server.
    NOTE: Do not add your custom routes in this file.
*/
app.use(require('./lib/router'));

//Do not add another /src/ route

app.get('/', (req, res) => {
    //Add your code here.
    //Put all your files inside of the views directory.
    return res.render('game');
});

//Start the server
//To change the port go to the config.json file
app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});