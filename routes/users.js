import express from "express";
const router = express.Router();
import { createUser, getUser, getUsers, deleteUser, updateUser } from "../controllers/users.js";

//todas las rutas comenzaran con "/users"
router.get("/", getUsers);

//pasa datos del frontend al servidor
//y aca es donde entra POSTMAN, porque x navegador 
//solo se puede hacer una peticion GET.
router.post("/", createUser)

//buscar x id 
router.get("/:id", getUser)

//eliminar x id
router.delete("/:id", deleteUser)

//actualizar x id
//put para reescribir todo 
//patch para reescribir solo una parte
router.patch("/:id", updateUser)


export default router;