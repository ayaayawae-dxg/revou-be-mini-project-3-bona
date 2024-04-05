import express from "express";
import routes from "./routes";
import log from "./routes/middleware/log";
import { errorRes } from "./routes/helpers/response";

const app = express();

app.use(express.json());
app.use(log);

app.use("/", routes);

app.use(errorRes);

app.listen(5000);
