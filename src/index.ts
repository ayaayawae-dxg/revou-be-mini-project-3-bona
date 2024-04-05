import express from "express";
import routes from "./routes";
import log from "./routes/middleware/log";
import { errorHandler } from "./routes/middleware/error";

const app = express();

app.use(express.json());
app.use(log);

app.use("/", routes);

app.use(errorHandler);

app.listen(5000);
