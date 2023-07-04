// server here
import Express from "express";

import productsRouter from "./routes/products";

const app = Express();

app.use(Express.json());

app.use("/products", productsRouter);

export default app;
