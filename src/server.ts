import express from "express";
import db from "./config/database.config";
import todoRouter from './route';
// import { validationResult } from 'express-validator';

db.sync().then(() => {
  console.log("Database synced successfully");
});

const app = express();
const port = process.env.PORT || 9100;

app.use(express.json());
app.use('/api/v1', todoRouter)

 
app.listen(port, () => {
  console.log("server listening on port 9100...");
});
