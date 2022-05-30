import express from "express";
import bodyParser from "body-parser"; //take the body of the request and turn it into a json object
//POST request body

import userRoutes from "./routes/users.js"; // asegurate de poner .js 

const app = express(); //toda nuestra aplicacion esta en este app. 
const PORT = 5000;

//middleware
app.use(bodyParser.json()); //JSON data en nuestra aplicacion. 

//con esto todos mis links comenzaran con /users.
app.use("/users", userRoutes); 

app.get("/", (req,res) =>{
    console.log("Hello World");
    res.send("Hello world");
})
//las paginas hacen peticiones get para llegar a la pagina. 

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

