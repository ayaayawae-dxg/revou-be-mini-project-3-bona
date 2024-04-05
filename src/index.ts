import express from "express";
import routes from "./routes";
import log from "./routes/middleware/log";

const app = express();

app.use(express.json());
app.use(log);

app.get("/", routes);

app.listen(5000);
