import express from "express";
import bodyParser from "body-parser";
import jester from "jester-jokes";
import doggyNames from "doggy-names";

const app = express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () =>{
console.log(`Server running on port ${port}.`)
})

app.get("/", (req, res) => {
    var randomName = doggyNames.random();
    const joke = jester.getJoke();
    res.render("index.ejs", {joke:joke, doggyName:randomName});
  });

  app.post("/submit", (req, res) => {
    var randomName = doggyNames.random();
    const joke = jester.getJoke();
    const name=req.body["first-name"]
    res.render("index.ejs", {personName:name, joke:joke, doggyName:randomName});
  });

  app.get("/submit", (req, res) => {
    var randomName = doggyNames.random();
    const joke = jester.getJoke();
    res.render("index.ejs", {joke:joke, doggyName:randomName});
  });



