require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT;
const methodOverride = require("method-override");
const pokemon = require("./models/pokemon");
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));

// INDEX
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {pokemon})
});

// NEW
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
});

// DESTROY


// UPDATE

// CREATE 
app.post("/pokemon", (req, res) => {
    pokemon.push(req.body)
    res.redirect("/pokemon")
})

// EDIT

// SHOW
app.get("/pokemon/:id", (req, res) => {
    const id = req.params.id;
    const pokeProfile = pokemon[id];
    res.render("show.ejs", {pokeProfile})
});

// LISTENER
app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`)
})