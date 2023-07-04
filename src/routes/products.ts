// product route
import {createProduct, getProduct} from "../controllers/products";

import {Router} from "express";

const router = Router();

router.post("/", createProduct);
router.get("/", getProduct);

export default router;
 