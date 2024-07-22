import express from "express";
import cors from "cors";
import { Signale } from 'signale';
import { custumerRoute } from "./customer/routes/custumerRoutes";
import { categorieRoute } from "./categories/routes/categorieRoute";
import { capRouter } from "./caps/routes/capsRoute";


const app = express();
const signale = new Signale();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/custumer',custumerRoute);
app.use('/api/v1/categorie',categorieRoute);
app.use('/api/v1/cap',capRouter);



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});