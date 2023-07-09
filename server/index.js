
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import indexRoutes from "./routes/index.routes.js";
import estadoCursoRoutes from "./routes/estadoCurso.routes.js"
import coursesRoutes from "./routes/courses.routes.js";
import instructoresRoutes from "./routes/instructores.routes.js";
import empresaRoutes from "./routes/empresas.routes.js";
import studentRoutes from "./routes/student.routes.js";
import sesionRoutes from "./routes/sesion.routes.js";
import estadoCalificacionRoutes from "./routes/estadoCalificacion.routes.js"; 
import calificacionRoutes from "./routes/calificacion.routes.js"; 
import tipopago from "./routes/tipoPago.routes.js";
import pago from "./routes/pago.routes.js";
import auth from "./routes/auth.routes.js";
import reporte from "./routes/reportes.routes.js";
import valorizacion from "./routes/valorizacion.routes.js"
import estudianteSesion from "./routes/estudianteSesion.routes.js"
import {PORT} from "./config.js"

import {dirname, join} from "path";  //
import { fileURLToPath } from "url"; //
import { dir } from "console";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url)); //

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

//seteamos las cookies
//app.use(cookieParser)

//se pasa por un funcion de express que procesa datos tipo json
app.use(express.json());
app.use(cors());

app.use(auth);
app.use(indexRoutes);
app.use(coursesRoutes);
app.use(estadoCursoRoutes);
app.use(instructoresRoutes);
app.use(empresaRoutes)
app.use(studentRoutes);
app.use(sesionRoutes);
app.use(estadoCalificacionRoutes);
app.use(calificacionRoutes)
app.use(tipopago);
app.use(pago);
app.use(reporte);
app.use(valorizacion);
app.use(estudianteSesion)

app.use(express.static(join(__dirname, '../client/build')))

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
