// product route
import {createProduct, getProduct, updateProduct} from "../controllers/products";

import {Router} from "express";

const router = Router();

router.post("/", createProduct);
router.get("/", getProduct);
router.put("/", updateProduct);

export default router;
 